import React, {Component} from 'react';
import {Button, Text, View, TextInput, Alert} from 'react-native';

class Login extends Component {
  state = {
    username: 'irfan',
    passworld: 'irfan123',
    isLogin: false,
  };

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="black"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(value) => this.setState({username: value})}
          value={this.state.username}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="black"
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(value) => this.setState({password: value})}
          value={this.state.passworld}
        />
        <Button
          title="Login"
          onPress={() => {
            if (
              this.state.username === 'irfan' &&
              this.state.passworld === 'irfan123'
            ) {
              this.setState({isLogin: true});
              Alert.alert('login sukses', `status login ${this.state.isLogin}`);
            } else {
              Alert.alert('login gagal');
            }
          }}
        />
      </View>
    );
  }
}

export default Login;
