import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {InputPassword, InputText, Button} from '../../components/';
import {postUser} from '../../fitures/Login/action';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(postUser(email, password));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.loginText}>Log in</Text>
        <InputText
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputPassword
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button text="Log in" marginBottom={16} onPress={loginHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
    marginTop: 16,
  },
});

export default Login;
