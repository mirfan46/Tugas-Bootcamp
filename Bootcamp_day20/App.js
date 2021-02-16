// In App.js in a new project

import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  Intro1Screen,
  Intro2Screen,
  Intro3Screen,
  LoginScreen,
  PostDetailScreen,
  ProfileScreen,
  ResultsScreen,
  SignUpScreen,
  SplashScreen,
  LogoutScreen,
} from './src/screen';
import MasterAuthentication, {AuthProvider} from './src/context/AuthContext';
import client from './src/service';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Logout" component={LogoutScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  const AuthenticationMaster = useContext(MasterAuthentication);
  const {isSignIn, isCheck} = AuthenticationMaster;

  const renderScreen = () => {
    if (isCheck) {
      return (
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
          initialParams={{isSignIn}}
        />
      );
    } else {
      if (isSignIn === false) {
        return (
          <>
            <Stack.Screen
              name="Intro1"
              component={Intro1Screen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Intro2"
              component={Intro2Screen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Intro3"
              component={Intro3Screen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
          </>
        );
      } else {
        return (
          <>
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PostDetail"
              component={PostDetailScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Results"
              component={ResultsScreen}
              options={{headerShown: false}}
            />
          </>
        );
      }
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>{renderScreen()}</Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default Main;
