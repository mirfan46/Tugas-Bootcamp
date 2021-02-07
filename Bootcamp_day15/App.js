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
import usersData from './user.json';

const Stack = createStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState(usersData);

  const cekLogin = (inputEmail, inputPassword) => {
    const cekEmail = users.some((user) => user.email === inputEmail);
    const cekPassword = users.some((user) => user.password === inputPassword);

    if (cekEmail === true && cekPassword === true) {
      setIsLogin(true);
      Alert.alert('login sukses');
    } else {
      Alert.alert('login gagal');
    }
  };

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
    Alert.alert('Register berhasil, silahkan login');
  };

  console.log(users);
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
