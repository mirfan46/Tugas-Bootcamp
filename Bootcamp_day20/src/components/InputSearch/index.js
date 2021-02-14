import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const InputSearch = (props) => {
  return (
    <View>
      <TextInput
        style={[styles.inputStyle, {width: props.width}]}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}
      />
      <View style={styles.searchButton}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={require('../../assets/searchicon.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#BEBAB3',
  },
  searchButton: {
    zIndex: 1,
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
