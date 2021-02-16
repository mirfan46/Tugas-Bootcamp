// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, combineReducers} from 'redux';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {LoginScreen, TodoScreen} from './src/screen';
import loginReducer from './src/Store/reducers/login';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer);

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
            <Stack.Screen name="Todo" component={TodoScreen} />
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
