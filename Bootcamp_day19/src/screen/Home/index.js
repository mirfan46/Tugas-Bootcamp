import React from 'react';
import {Text, View, Button, Image} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{marginBottom: 100}}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>Home</Text>
        <Image
          style={{width: 50, height: 50, alignSelf: 'center', marginTop: 150}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={{marginBottom: 40}}>
        <Button
          title="Go to User List"
          onPress={() => navigation.navigate('UserList')}
        />
      </View>
      <View>
        <Button
          title="Go to Post List"
          onPress={() => navigation.navigate('PostList')}
        />
      </View>
    </View>
  );
};

export default Home;
