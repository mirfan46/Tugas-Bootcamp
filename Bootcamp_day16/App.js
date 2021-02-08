import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {
  FeedsScreen,
  LoginScreen,
  MainScreen,
  ProfileScreen,
  RegisterScreen,
  CommentsScreen,
} from './src/screens';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import usersData from './user.json';

const Stack = createStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [loginData, setLoginData] = useState('');

  const cekLogin = (inputEmail, inputPassword) => {
    const cekEmail = users.some((user) => user.email === inputEmail);
    const cekPassword = users.some((user) => user.password === inputPassword);

    let dataLoginUser = users.filter((e) => e.email === inputEmail);
    saveLoginData(dataLoginUser);

    if (cekEmail === true && cekPassword === true) {
      setIsLogin(true);
      Alert.alert('login sukses');
    } else {
      Alert.alert('login gagal');
    }
  };

  const saveLoginData = async (value) => {
    // console.log(value);
    try {
      await AsyncStorage.setItem('loginData', JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const getLoginData = async () => {
    let data = JSON.parse(await AsyncStorage.getItem('loginData'));
    console.log({dataLogin: data});
    try {
      if (data !== null) {
        setLoginData(data);
      } else {
        console.log('no data');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLoginData;
    console.log({loadLoginData: loginData});
  }, []);

  const register = (name, email, password) => {
    let dataUser = users;

    dataUser.push({
      id: users.length + 1,
      first_name: name,
      last_name: 'Robot',
      email: email,
      gender: 'NA',
      slogan: 'NA',
      jobs: 'NA',
      photo: `https://robohash.org/${name}`,
      password: password,
    });
    setUsers(dataUser);
  };

  // console.log(users);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <>
            <Stack.Screen name="Feeds" component={FeedsScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Comments" component={CommentsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#5DB075',
                },
              }}
            />
            <Stack.Screen
              initialParams={{CekLogin: cekLogin}}
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Log In',
                headerTitleStyle: {
                  flex: 1,
                  textAlign: 'center',
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              initialParams={{register: register}}
              name="Register"
              component={RegisterScreen}
              options={{
                title: 'Sign Up',
                headerTitleStyle: {
                  flex: 1,
                  textAlign: 'center',
                  fontWeight: 'bold',
                },
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
