import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const CategoryButton = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.button, {width: props.width}]}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 3,
    backgroundColor: '#65AAEA',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: '#F2F2F2',
    fontWeight: '500',
    fontSize: 12,
    fontStyle: 'normal',
  },
});

export default CategoryButton;
