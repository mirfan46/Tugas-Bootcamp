import React from 'react';
import {View, Text} from 'react-native';
import {useState} from 'react/cjs/react.development';
import {Input, InputPassword, Button} from '../../components/Index';
import UseForm from '../../components/Hooks/UseForm';
import validate from '../../components/Hooks/ValidateInfo';

const Register = ({route}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {handleChange, handleSubmit, value, errors} = UseForm(
    route.params.register(name, email, password),
    validate,
  );

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Input
        placeHolder="Name"
        onChangeText={(name) => setName(name)}
        value={name}
        onChange={() => handleChange('name', name)}
      />
      <>{errors.name && <Text style={{color: 'red'}}>{errors.name}</Text>}</>
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
        scureText={true}
        onChange={() => handleChange('password', password)}
      />
      <>
        {errors.password && (
          <Text style={{color: 'red'}}>{errors.password}</Text>
        )}
      </>

      <Button width={312} text="Sign Up" onPress={handleSubmit} />
    </View>
  );
};

export default Register;
