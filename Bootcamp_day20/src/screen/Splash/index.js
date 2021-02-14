import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash.png')} />
      <Text style={styles.splashText}>CodeFactory</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    marginTop: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 40,
    color: '#3C3A36',
  },
});
