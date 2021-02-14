import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputPassword = (props) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#FFFFFF',
    width: 343,
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#BEBAB3',
  },
});
