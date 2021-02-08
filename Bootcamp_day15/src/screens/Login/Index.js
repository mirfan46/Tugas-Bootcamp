import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {Input, InputPassword, Button} from '../../components/Index';
import UseForm from '../../components/Hooks/UseForm';
import validate from '../../components/Hooks/ValidateInfo';

const Login = ({route}) => {
  const {
    params: {CheckLogin},
  } = route;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [handleChange, values, handleSubmit, errors] = UseForm(
    CheckLogin,
    validate,
  );

  console.log({login_screen: {values, handleSubmit}});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        placeHolder="Email"
        onChangeText={(email) => {
          handleChange('name', email);
          handleChange('email', email);
        }}
        value={values.email}
        // onChange={() => {
        //   handleChange('name', email);
        //   handleChange('email', email);
        // }}
      />
      <>{errors.email && <Text style={{color: 'red'}}>{errors.email}</Text>}</>
      <InputPassword
        placeHolder="Password"
        onChangeText={(password) => handleChange('password', password)}
        value={values.password}
        // onChange={() => handleChange('password', password)}
        scureText={true}
      />
      <>
        {errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}
      </>
      <Button width={312} text="Log In" onPress={() => handleSubmit()} />
    </View>
  );
};

export default Login;
