import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, InputPassword, Button} from '../../components/index';
import UseForm from '../../components/Hooks/useForm';
import validate from '../../components/Hooks/validateInfo';

const Login = ({route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const {handleChange, handleSubmit, values, errors} = UseForm(
  //   () => route.params.CekLogin(email, password),
  //   validate,
  // );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        placeHolder="Email"
        // name={'email'}
        onChangeText={(text) => setEmail(text)}
        value={email}
        // onChange={handleChange}
      />
      {/* <>{errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}</> */}
      <InputPassword
        placeHolder="Password"
        // name={'password'}
        onChangeText={(text) => setPassword(text)}
        value={password}
        // onChange={handleChange}
        scureText={true}
      />
      {/* <>
        {errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}
      </> */}
      <Button
        width={312}
        text="Log In"
        onPress={() => route.params.CekLogin(email, password)}
      />
    </View>
  );
};

export default Login;
