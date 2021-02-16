import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Input, InputPassword, Button} from '../../components/index';
import {login} from '../../Store/actions/login';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(login(email, password));
  };

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
      <Button width={300} text="Log In" onPress={loginHandler} />
    </View>
  );
};

export default Login;
