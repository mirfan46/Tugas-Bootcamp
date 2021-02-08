import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, InputPassword, Button} from '../../components/Index';
import UseForm from '../../components/Hooks/UseForm';
import validate from '../../components/Hooks/ValidateInfo';

const Login = ({route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleChange, handleSubmit, values, errors} = UseForm(
    () => route.params.CekLogin(email, password),
    validate,
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        placeHolder="Email"
        onChangeText={(email) => setEmail(email)}
        value={email}
        onChange={() => handleChange('email', email)}
      />
      <>{errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}</>
      <InputPassword
        placeHolder="Password"
        onChangeText={(password) => setPassword(password)}
        value={password}
        onChange={() => handleChange('password', password)}
        scureText={true}
      />
      <>
        {errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}
      </>
      <Button width={312} text="Log In" onPress={handleSubmit} />
    </View>
  );
};

export default Login;
