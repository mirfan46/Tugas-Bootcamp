import React from 'react';
import {View} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {Input, InputPassword, Button} from '../../components/Index';

const Register = ({route}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        placeHolder="Name"
        onChangeText={(name) => setName(name)}
        value={name}
      />
      <Input
        placeHolder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
      />
      <InputPassword
        placeHolder="Password"
        onChangeText={(password) => setPassword(password)}
        value={password}
        scureText={true}
      />
      <Button
        width={312}
        text="Sign Up"
        onPress={() => route.params.register(name, email, password)}
      />
    </View>
  );
};

export default Register;
