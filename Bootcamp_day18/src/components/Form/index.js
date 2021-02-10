import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useMutation} from '@apollo/client';

import {INSERT_TODO} from '../../service/todo';

const Form = () => {
  const [idUser, setIdUser] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [insertTodo, {loading, data}] = useMutation(INSERT_TODO);
  console.log({loading, data});
  return (
    <View>
      <Text>Form Todo</Text>
      <Text>Id User:</Text>
      <TextInput
        placeholder="idUser"
        style={styles.inputStyle}
        value={idUser}
        onChangeText={(value) => setIdUser(value)}
      />
      <Text>Title:</Text>
      <TextInput
        placeholder="Title"
        style={styles.inputStyle}
        value={title}
        onChangeText={(value) => setTitle(value)}
      />
      <Text>Description:</Text>
      <TextInput
        placeholder="Description"
        style={styles.inputStyle}
        value={description}
        onChangeText={(value) => setDescription(value)}
      />
      <TouchableOpacity
        style={[styles.button, {width: 340}]}
        onPress={() => {
          insertTodo({
            variables: {
              idUser: idUser,
              title: title,
              description: description,
              status: false,
            },
          });
          setIdUser('');
          setTitle('');
          setDescription('');
        }}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#F6F6F6',
    width: 340,
    borderRadius: 8,
    marginBottom: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  button: {
    marginTop: 10,
    padding: 16,
    backgroundColor: '#5DB075',
    alignItems: 'center',
    borderRadius: 30,
  },
});
