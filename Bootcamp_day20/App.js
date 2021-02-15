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
  const {isSignIn} = AuthenticationMaster;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isSignIn === false ? (
          <>
            {/* <Stack.Screen name="Splash" component={SplashScreen} /> */}
            <Stack.Screen name="Intro1" component={Intro1Screen} />
            <Stack.Screen name="Intro2" component={Intro2Screen} />
            <Stack.Screen name="Intro3" component={Intro3Screen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="PostDetail" component={PostDetailScreen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
          </>
        )}
      </Stack.Navigator>
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
