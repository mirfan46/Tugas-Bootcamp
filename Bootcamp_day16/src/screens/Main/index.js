import React from 'react';
import {View, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Main({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5DB075',
        paddingTop: 100,
      }}>
      <Image source={require('../../img/logo.png')} />
      <View style={{flex: 1, flexDirection: 'row', marginTop: 180}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{marginRight: 100, fontSize: 18, color: '#FFFFFF'}}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{fontSize: 18, color: '#FFFFFF'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Main;
