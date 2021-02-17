import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputText = (props) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default InputText;

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
