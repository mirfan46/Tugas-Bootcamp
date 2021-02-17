// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {useSelector} from 'react-redux';
import {Provider} from 'react-redux';
import {LoginScreen, TodoScreen} from './src/screen';
import loginReducer from './src/Store/reducers/login';
import todoReducer from './src/Store/reducers/todo';

const Stack = createStackNavigator();

const logger = (state) => (next) => (action) => {
  console.log(`Memanggil ${action.type}`);
  return next(action);
};

const rootReducer = combineReducers({
  login: loginReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

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
