import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = (props) => {
  return (
    <View>
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeHolder}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </View>
  );
};

export default Input;

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
