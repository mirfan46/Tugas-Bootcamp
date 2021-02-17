import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import LoginReducer from './Login/reducer';
const rootReducer = combineReducers({
  login: LoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export default store;
