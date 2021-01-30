import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../logo.png')} />
        <View style={styles.menu}>
          <TouchableOpacity>
            <Text style={{marginRight: 100, fontSize: 18, color: '#FFFFFF'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{fontSize: 18, color: '#FFFFFF'}}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
