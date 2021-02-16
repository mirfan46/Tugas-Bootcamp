import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {Input, InputPassword, Button} from '../../components/index';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        placeHolder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <InputPassword
        placeHolder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        width={300}
        text="Log In"
        // onPress={() => LoginMaster.cekLogin(email, password)}
      />
    </View>
  );
};

export default Login;
