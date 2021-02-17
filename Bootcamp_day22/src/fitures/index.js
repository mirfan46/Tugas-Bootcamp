import {createStore, combineReducers, applyMiddleware} from 'redux';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

import LoginReducer from './Login/reducer';
import ProductsReducer from './Products/reducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  products: ProductsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitlist: ['login'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware),
);

export const persistor = persistStore(store);
