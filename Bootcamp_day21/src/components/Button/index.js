import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const ButtonTemplate = (props) => {
  return (
    <>
      <TouchableOpacity
        style={[styles.button, {width: props.width}]}
        onPress={props.onPress}>
        <Text style={{color: 'white'}}>{props.text}</Text>
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#5DB075',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default ButtonTemplate;
