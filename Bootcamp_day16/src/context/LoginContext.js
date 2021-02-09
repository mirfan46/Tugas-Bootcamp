import React, {useState, createContext} from 'react';
import {Alert} from 'react-native';
import usersData from '../../user.json';

const MasterLogin = createContext();

const LoginProvider = ({children, navigation}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(usersData);

  const cekLogin = (inputEmail, inputPassword) => {
    console.log({cekLogin: {inputEmail, inputPassword}});
    const cekEmail = users.some((user) => user.email === inputEmail);
    const cekPassword = users.some((user) => user.password === inputPassword);

    if (cekEmail === true && cekPassword === true) {
      setIsLogin(true);
      Alert.alert('login sukses');
    } else {
      Alert.alert('login gagal');
    }
  };

  const allData = {
    isLogin,
    cekLogin,
  };

  return (
    <MasterLogin.Provider value={allData}>{children}</MasterLogin.Provider>
  );
};

const LoginConsumer = MasterLogin.Consumer;

export default MasterLogin;

export {LoginProvider, LoginConsumer};
