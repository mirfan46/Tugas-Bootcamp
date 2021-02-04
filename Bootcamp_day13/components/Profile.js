import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
  CheckBox,
  Image,
  ScrollView,
} from 'react-native';
import useForm from './useForm';
import validate from './validateinfo';

const Profile = ({userSignInData, onRouteChange, update, logout}) => {
  const {handleChange, handleSubmit} = useForm(validate);

  return (
    <ScrollView>
      <View
        style={{
          height: 245,
          backgroundColor: '#5DB075',
          zIndex: 2,
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onRouteChange('todo')}>
            <Text style={styles.textHeaderTodo}>Todo</Text>
          </TouchableOpacity>
          <Text style={styles.textHeaderProfile}>Profile</Text>
          <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.textHeaderLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={{
            alignSelf: 'center',
            width: 158,
            height: 158,
            borderRadius: 100,
          }}
          source={{uri: `https://robohash.org/${userSignInData.photo}`}}
        />
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 8}}>
          {userSignInData.first_name} {userSignInData.last_name}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 16}}>
          {userSignInData.gender}
        </Text>
        <View style={{marginBottom: 34}}>
          <Text style={{color: '#666666'}}>Slogan</Text>
          <TextInput
            style={styles.inputSlogan}
            placeholder={'Slogan'}
            onChange={(event) => handleChange('slogan', event.nativeEvent.text)}
          />
        </View>
        <View>
          <Text style={{color: '#666666'}}>Jobs</Text>
          <TextInput
            style={styles.inputJobs}
            placeholder={'Jobs'}
            onChange={(event) => handleChange('jobs', event.nativeEvent.text)}
          />
        </View>
        <View style={{marginRight: 215}}>
          <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
            <Text style={styles.textUpdate}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
    marginTop: 60,
    marginBottom: 32,
  },
  textHeaderTodo: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginLeft: 16,
  },
  textHeaderLogout: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginRight: 16,
  },
  textHeaderProfile: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF',
  },
  inputSlogan: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputJobs: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 65,
  },
  buttonUpdate: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 121,
    height: 51,
    backgroundColor: '#5DB075',
    borderRadius: 100,
    marginBottom: 16,
  },
  textUpdate: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;
