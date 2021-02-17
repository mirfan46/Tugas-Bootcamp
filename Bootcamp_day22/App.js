// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider, useSelector} from 'react-redux';
import {LoginScreen, ProductsScreen} from './src/screen';
import store from './src/fitures';
const Stack = createStackNavigator();

function App() {
  const isLogin = useSelector((state) => state.login.isSignIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin === false ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Products" component={ProductsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;
