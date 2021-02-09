import 'react-native-gesture-handler';
import * as React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginProvider} from './src/context/LoginContext';
import {LoginScreen, TodoScreen, PostScreen} from './src/screen';

const Stack = createStackNavigator();

function App() {
  return (
    <LoginProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Todo" component={TodoScreen} />
          <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LoginProvider>
  );
}

export default App;
