import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {LOGIN, SIGNUP} from '../service/user';
import {MyNavigate} from '../helper/navigator';

const MasterAuth = createContext();

const AuthProvider = ({children, navigation}) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [dataLogin, setDataLogin] = useState({});
  const [isCheck, setIfCheck] = useState(true);
  const loginMutation = useMutation(LOGIN);
  const signUpMutation = useMutation(SIGNUP);

  useEffect(() => {
    console.log(isSignIn);
    setTimeout(() => {
      checkLoginStatus();
    }, 3000);
  }, []);

  const checkLoginStatus = async () => {
    let tok = null;
    let ld = null;
    try {
      tok = await AsyncStorage.getItem('Token');
      ld = await AsyncStorage.getItem('LoginData');
    } catch (e) {
      console.log(e);
    } finally {
      if (tok !== null && ld !== null) {
        const user = JSON.parse(ld);
        setDataLogin(user);
        setIsSignIn(true);
      }
      setIfCheck(false);
    }
  };

  const login = async (emailUser, passwordUser) => {
    const [insertLogin, {data, error}] = loginMutation;
    try {
      insertLogin({
        variables: {
          email: emailUser,
          password: passwordUser,
        },
      });

      if (error) {
        Alert.alert('Login Fail');
      } else if (data) {
        Alert.alert('Login Success');
        await AsyncStorage.setItem('Token', data.login.token);
        await AsyncStorage.setItem('LoginData', JSON.stringify(data.login));
        setDataLogin(data.login);
        setIsSignIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('Token');
      await AsyncStorage.removeItem('LoginData');
      setIsSignIn(false);
    } catch (e) {
      console.log(e);
    }
  };

  const signup = (userName, userEmail, userPassword) => {
    const [insertSignUp, {data, error}] = signUpMutation;
    try {
      insertSignUp({
        variables: {
          name: userName,
          email: userEmail,
          password: userPassword,
        },
      });
    } catch (error) {
      console.log(error);
    } finally {
      Alert.alert('Register Success, Please try login');
    }
  };

  const allData = {
    isSignIn,
    login,
    signup,
    logout,
    dataLogin,
    isCheck,
  };

  return <MasterAuth.Provider value={allData}>{children}</MasterAuth.Provider>;
};

const AuthConsumer = MasterAuth.Consumer;

export default MasterAuth;
export {AuthProvider, AuthConsumer};
