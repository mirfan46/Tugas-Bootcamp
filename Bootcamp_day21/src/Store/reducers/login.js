import {Alert} from 'react-native';
import {LOGIN} from '../actions/login';

const initialState = {
  isSignIn: false,
  users: [
    {
      id: 11,
      first_name: 'Gregor',
      last_name: 'Dubble',
      email: 'irfan@gomail.com',
      gender: 'Genderfluid',
      slogan: 'brand bricks-and-clicks e-business',
      jobs: 'Programmer Analyst I',
      photo: 'irfan',
      password: 'mirfan',
    },
  ],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const cekEmail = state.users.some((user) => user.email === action.email);
      const cekPassword = state.users.some(
        (user) => user.password === action.password,
      );

      if (cekEmail === true && cekPassword === true) {
        Alert.alert('Login Sukses');
        return {isSignIn: true};
      } else {
        Alert.alert('Login gagal');
      }
      break;

    default:
      return state;
  }
  return state;
};

export default loginReducer;
