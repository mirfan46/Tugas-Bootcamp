import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './Note';

export default class Main extends React.Component {
  state = {
    noteText: '',
    user: '',
  };

  constructor(props) {
    super(props);
    this.getData();
  }

  // storeData = async () => {
  //   try {
  //     await AsyncStorage.multiSet(
  //       ['user', this.props.userSignInData.first_name],
  //       ['note', this.state.noteText],
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  addNote = async () => {
    try {
      this.setState({user: this.props.userSignInData.first_name});
      await AsyncStorage.multiSet([
        ['user', this.state.user],
        ['note', this.state.noteText],
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const note = await AsyncStorage.getItem('note');
      if (user !== null) {
        this.setState({user: user});
      }
      if (note !== null) {
        this.setState({noteText: note});
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.user);

    return (
      <ScrollView>
        <View style={styles.container}>
          {/* Start: Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>TO DO APP</Text>
          </View>

          {/* Start: Scrollview */}
          <ScrollView style={styles.container}>
            <Note user={this.state.user} note={this.state.noteText} />
          </ScrollView>

          {/* Footer: Text Input */}
          <View style={styles.footer}>
            <TextInput
              style={styles.textInput}
              onChangeText={(noteText) => this.setState({noteText: noteText})}
              // value={this.state.noteText}
              placeholder="Enter To Do"
              placeholderTextColor="#e9c46a"
            />
          </View>

          {/* Add to do button */}
          <TouchableOpacity onPress={this.addNote} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  // deleteNote(key) {
  //   this.state.noteArray.splice(key, 1);
  //   this.setState({noteArray: this.state.noteArray});
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 290,
  },
  header: {
    backgroundColor: '#264653',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#2a9d8f',
  },
  headerText: {
    color: '#e9c46a',
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
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
