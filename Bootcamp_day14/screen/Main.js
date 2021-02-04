import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Main = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../logo.png')} />
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{marginRight: 100, fontSize: 18, color: '#FFFFFF'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <Text style={{marginRight: 100, fontSize: 18, color: '#FFFFFF'}}>
              Post
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 18, color: '#FFFFFF'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 100,
    paddingBottom: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5DB075',
  },
  menu: {
    marginTop: 180,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Main;
