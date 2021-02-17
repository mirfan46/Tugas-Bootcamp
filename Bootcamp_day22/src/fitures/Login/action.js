import axios from 'axios';
import {LOGIN, LOGOUT} from './constans';

export const setUser = (payload) => {
  return {type: LOGIN, payload};
};

export const setLogout = () => {
  return {type: LOGOUT};
};

export const postUser = (username, password) => {
  const params = JSON.stringify({
    data: {
      username: username,
      password: password,
    },
  });
  console.log(params);
  return (dispatch) => {
    axios
      .post('http://simple-wms.herokuapp.com/api/v1/auth/login/', params, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // console.log('data user', response.data);
        dispatch({type: LOGIN, payload: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
