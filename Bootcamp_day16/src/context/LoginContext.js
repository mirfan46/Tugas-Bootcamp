import React, {useState, createContext, useEffect} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersData from '../../user.json';

const MasterLogin = createContext();

const LoginProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [loginData, setLoginData] = useState(null);

  const cekLogin = (inputEmail, inputPassword) => {
    let loginTemp;
    const cekEmail = users.some((user) => user.email === inputEmail);
    const cekPassword = users.some((user) => user.password === inputPassword);
    const dataLogin = users.map((e) =>
      e.email === inputEmail ? (loginTemp = e) : e,
    );

    if (cekEmail === true && cekPassword === true) {
      setIsLogin(true);
      setLoginData(dataLogin);
      storeData(dataLogin);
      Alert.alert('login sukses');
    } else {
      Alert.alert('login gagal');
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('login', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('login');
      jsonValue != null ? JSON.parse(jsonValue) : null;
      console.log(jsonValue);
      setLoginData(jsonValue);
      setIsLogin(true);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData;
  }, [cekLogin]);

  console.log(loginData);

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
