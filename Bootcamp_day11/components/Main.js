import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Main = ({onRouteChange}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={require('../logo.png')} />
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => onRouteChange('login')}>
            <Text style={{marginRight: 100, fontSize: 18, color: '#FFFFFF'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRouteChange('signup')}>
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
