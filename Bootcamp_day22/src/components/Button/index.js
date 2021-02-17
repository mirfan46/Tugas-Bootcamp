import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, {marginBottom: props.marginBottom}]}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 343,
    padding: 16,
    backgroundColor: '#E3562A',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
    fontStyle: 'normal',
  },
});

export default Button;
