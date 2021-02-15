import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {InputPassword, InputText, Button} from '../../components/';
import MasterAuth from '../../context/AuthContext';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const AuthMaster = useContext(MasterAuth);

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={{alignSelf: 'flex-start', marginTop: 15, marginLeft: 15}}
          onPress={() => navigation.navigate('Login')}>
          <Image source={require('../../assets/prev.png')} />
        </TouchableOpacity>
        <Image source={require('../../assets/signup.png')} />
        <Text style={styles.signUpText}>Sign Up</Text>
        <Text style={styles.createAccountText}>Create your account</Text>
        <InputText
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <InputText
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputPassword
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <Button
          text="Sign up"
          marginBottom={16}
          onPress={() => AuthMaster.signup(name, email, password)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logInText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
    marginTop: 16,
  },
  createAccountText: {
    marginBottom: 16,
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#78746D',
  },
  logInText: {
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
    color: '#78746D',
    marginBottom: 64,
  },
});

export default SignUp;
