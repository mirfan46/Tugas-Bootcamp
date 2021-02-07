import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const InputPassword = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={styles.inputStyle}
        placeholder={props.placeHolder}
        onChangeText={props.onChangeText}
        onChange={props.onChange}
        value={props.value}
        secureTextEntry={props.scureText}
        paddingRight={80}
      />
      <View style={{zIndex: 1, position: 'absolute', right: 20, top: 24}}>
        <TouchableOpacity onPress={props.pAction}>
          <Text style={{fontSize: 16, color: '#5DB075'}}>{props.pText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputPassword;

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
