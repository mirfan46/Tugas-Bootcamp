import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useMutation} from '@apollo/client';
import {LOGIN, SIGNUP} from '../service/user';

const MasterAuth = createContext();

const AuthProvider = ({children, navigation}) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const loginMutation = useMutation(LOGIN);
  const signUpMutation = useMutation(SIGNUP);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('Token');
      const loginData = await AsyncStorage.getItem('LoginData');
      if (token !== null && loginData !== loginData) {
        setIsSignIn(true);
      }
    } catch (e) {
      console.log(e);
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
      () => navigation.navigate('Login');
      Alert.alert('Register Success, Please try login');
    }
  };

  const allData = {
    isSignIn,
    login,
    signup,
    logout,
  };

  return <MasterAuth.Provider value={allData}>{children}</MasterAuth.Provider>;
};

const AuthConsumer = MasterAuth.Consumer;

export default MasterAuth;
export {AuthProvider, AuthConsumer};
