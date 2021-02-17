import {Alert} from 'react-native';
import {LOGIN, LOGOUT} from './constans';

const defaultState = {
  isSignIn: false,
  user: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload, isSignIn: true};
      break;
    default:
      return state;
  }
};

export default reducer;
