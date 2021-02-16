import users from '../../../user.json';

const defaultState = {
  isLogin: false,
};

const cekLogin = (inputEmail, inputPassword) => {
  const cekEmail = users.some((user) => user.email === inputEmail);
  const cekPassword = users.some((user) => user.password === inputPassword);

  if (cekEmail === true && cekPassword === true) {
    Alert.alert('login sukses');
  } else {
    Alert.alert('login gagal');
  }
};

const reducer = (state = defaultState, actions) => {
  switch (actions.type) {
    case SET_LOGIN:
      return {cekLogin, isLogin: true};
  }
};
