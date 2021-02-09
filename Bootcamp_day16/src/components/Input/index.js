import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputTemplate = (props) => {
  return (
    <TextInput
      style={styles.inputStyle}
      placeholder={props.placeHolder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

export default InputTemplate;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#F6F6F6',
    width: 343,
    borderRadius: 8,
    marginBottom: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
});
