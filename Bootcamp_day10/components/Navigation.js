import React from 'react';
import {Text, View} from 'react-native';

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return (
      <View>
        <Text onPress={() => onRouteChange('signout')}>Sign Out</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text onPress={() => onRouteChange('signin')}>Sign In</Text>
        <Text onPress={() => onRouteChange('register')}>Register</Text>
      </View>
    );
  }
};

export default Navigation;
