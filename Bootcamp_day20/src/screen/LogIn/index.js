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
import MasterAuthentication from '../../context/AuthContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const AuthenticationMaster = useContext(MasterAuthentication);
  // console.log(AuthenticationMaster);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={{marginTop: 30}}
          source={require('../../assets/login.png')}
        />
        <Text style={styles.loginText}>Log in</Text>
        <Text style={styles.loginSocialText}>Login with social networks</Text>
        <View style={styles.socialWrap}>
          <Image source={require('../../assets/facebook.png')} />
          <Image
            style={{marginLeft: 12, marginRight: 12}}
            source={require('../../assets/instagram.png')}
          />
          <Image source={require('../../assets/google.png')} />
        </View>
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
        <Text style={styles.forgetPassText}>Forget Password?</Text>
        <Button
          text="Log in"
          marginBottom={16}
          onPress={() => AuthenticationMaster.login(email, password)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>Sign Up</Text>
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
  socialWrap: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
  },
  loginText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
    marginTop: 16,
  },
  loginSocialText: {
    marginTop: 8,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#78746D',
  },
  forgetPassText: {
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
    color: '#78746D',
    marginBottom: 16,
  },
  signUpText: {
    fontWeight: '500',
    fontSize: 14,
    fontStyle: 'normal',
    color: '#78746D',
    marginBottom: 64,
  },
});

export default Login;
