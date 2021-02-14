import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../../components';

const Intro2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.skipWrap}>
        <TouchableOpacity>
          <Text style={styles.textSkip}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image source={require('../../assets/intro2.png')} />
        <Text style={styles.textContent}>Find a course for you</Text>
        <Text style={styles.textContent2}>
          Quarantine is the perfect time to spend your day learning something
          new, from anywhere!
        </Text>
        <Button
          text="Next"
          marginBottom={50}
          onPress={() => navigation.navigate('Intro3')}
        />
      </View>
    </View>
  );
};

export default Intro2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skipWrap: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-start',
  },
  content: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSkip: {
    fontWeight: '500',
    fontSize: 14,
    color: '#78746D',
  },
  textContent: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
    marginTop: 16,
  },
  textContent2: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#78746D',
    marginTop: 8,
    marginBottom: 94,
  },
});
