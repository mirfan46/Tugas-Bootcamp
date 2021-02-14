import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../../assets/prev.png')} />
        </TouchableOpacity>
        <Text style={styles.profileText}>Profile</Text>
        <View></View>
      </View>
      <View>
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar.png')}
        />
      </View>
      <View style={styles.profile}>
        <Text style={styles.myProfileText}>My Profile</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.myPostText}>My Post</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  avatar: {
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 100,
    borderWidth: 3,
    backgroundColor: '#F8F2EE',
    borderColor: '#65AAEA',
  },
  profile: {
    alignSelf: 'center',
    marginTop: 32,
    width: 343,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderColor: '#BEBAB3',
    borderWidth: 2,
    borderRadius: 16,
  },
  post: {
    alignSelf: 'center',
    marginTop: 16,
    width: 343,
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderColor: '#BEBAB3',
    borderWidth: 2,
    borderRadius: 16,
  },
  profileText: {
    marginRight: 50,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
  },
  myProfileText: {
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
  },
  myPostText: {
    alignSelf: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
  },
});

export default Profile;
