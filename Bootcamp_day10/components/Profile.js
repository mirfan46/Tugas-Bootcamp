import React from 'react';
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

const Profile = ({userSignInData}) => {
  let profile = userSignInData.map((user, i) => {
    return userSignInData[i].email;
  });

  console.log(profile);
  return (
    <ScrollView>
      <View
        style={{
          height: 245,
          backgroundColor: '#5DB075',
          zIndex: 2,
        }}>
        <View style={styles.header}>
          <View></View>
          <Text style={styles.textHeaderProfile}>Profile</Text>
          <TouchableOpacity>
            <Text style={styles.textHeaderLogout}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Image style={{alignSelf: 'center'}} source={{uri: ``}} />
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 8}}>
          Jhon Julian
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 16}}>
          Im Superman
        </Text>
        <View style={{marginBottom: 34}}>
          <Text style={{color: '#666666'}}>Slogan</Text>
          <TextInput style={styles.inputSlogan} placeholder={'Slogan'} />
        </View>
        <View>
          <Text style={{color: '#666666'}}>Jobs</Text>
          <TextInput style={styles.inputJobs} placeholder={'Jobs'} />
        </View>
        <View style={{marginRight: 215}}>
          <TouchableOpacity style={styles.buttonUpdate}>
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
  textHeaderLogout: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
    marginRight: 16,
  },
  textHeaderProfile: {
    fontWeight: 'bold',
    marginLeft: 70,
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
