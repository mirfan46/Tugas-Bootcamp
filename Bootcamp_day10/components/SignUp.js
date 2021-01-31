import React, {Component, useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
  CheckBox,
  Image,
  ScrollView,
} from 'react-native';

const SignUp = ({onRouteChange, register}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onRouteChange('main')}>
            <Image source={require('../close.png')} />
          </TouchableOpacity>
          <Text style={styles.textHeaderSignUp}>Sign Up</Text>
          <TouchableOpacity onPress={() => onRouteChange('login')}>
            <Text style={styles.textHeaderLogin}>Login</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.inputName}
          placeholder={'Name'}
          onChangeText={(name) => setName(name)}
          value={name}
        />
        <TextInput
          style={styles.inputEmail}
          placeholder={'Email'}
          onChangeText={(email) => setEmail(email)}
          value={email}
        />
        <TextInput
          style={styles.inputPassword}
          placeholder={'Password'}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox />
          <Text style={styles.textCheckbox}>
            I would like to receive your newsletter and other promotional
            information.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonSignUp}
          onPress={() => {
            register(name, email, password);
          }}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.textForget}>Forgot your password?</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 32,
  },
  textHeaderLogin: {
    fontSize: 16,
    color: '#5DB075',
    fontWeight: '500',
  },
  textHeaderSignUp: {
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 100,
    marginRight: 70,
  },
  inputName: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputEmail: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputPassword: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 32,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: 343,
    marginBottom: 43,
  },
  textCheckbox: {
    color: '#666666',
    fontSize: 14,
  },
  buttonSignUp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 51,
    backgroundColor: '#5DB075',
    borderRadius: 100,
    marginBottom: 16,
  },
  textSignUp: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textForget: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SignUp;
