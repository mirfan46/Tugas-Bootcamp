import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addNote, deleteNote} from '../../Store/actions/todo';
import List from './list';

const Todo = () => {
  const [noteText, setNoteText] = useState('');
  const noteTodo = useSelector((state) => state.todo.noteArray);
  const dispatch = useDispatch();
  const todoHandler = () => {
    dispatch(addNote(noteText));
    setNoteText('');
  };

  let notes = noteTodo.map((val, key) => {
    // const deleteMethod = () => {
    //   dispatch(deleteNote(key));
    // };
    return (
      <List
        key={key}
        keyval={key}
        val={val}
        deleteMethod={() => dispatch(deleteNote(key))}
      />
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>{notes}</ScrollView>
      <View style={styles.footer}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setNoteText(text)}
          value={noteText}
          placeholder="Enter to do"
          placeholderTextColor="#E9C46A"
        />
      </View>

      <TouchableOpacity onPress={todoHandler} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#f4a261',
    borderRadius: 20,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#e76f51',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});
