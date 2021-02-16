import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const list = (props) => {
  return (
    <View style={styles.note}>
      <Text style={styles.noteText}>{props.val.date}</Text>
      <Text style={styles.noteText}>{props.val.note}</Text>

      <TouchableOpacity onPress={props.deleteMethod} style={styles.noteDelete}>
        <Text style={styles.noteDeleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default list;

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
  },
  noteDelete: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    borderRadius: 20,
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
  noteDeleteText: {
    color: '#fff',
  },
});
