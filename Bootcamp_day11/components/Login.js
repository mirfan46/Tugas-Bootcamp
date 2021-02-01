import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailUser: '',
      passwordUser: '',
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textLogin}>Log In</Text>
          <TextInput
            style={styles.inputEmail}
            placeholder={'Email'}
            onChangeText={(emailUser) => this.setState({emailUser})}
            value={this.state.emailUser}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(passwordUser) => this.setState({passwordUser})}
            value={this.state.passwordUser}
          />
          <TouchableOpacity
            style={styles.buttonLogIn}
            onPress={() => {
              this.props.cekLogin(
                this.state.emailUser,
                this.state.passwordUser,
              );
            }}>
            <Text style={styles.textLogIn}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.textForget}>Forgot your password?</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  textLogin: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 60,
    marginBottom: 32,
  },
  inputEmail: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },
  inputPassword: {
    backgroundColor: '#E8E8E8',
    width: 343,
    height: 50,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 167,
  },
  buttonLogIn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 343,
    height: 51,
    backgroundColor: '#5DB075',
    borderRadius: 100,
    marginBottom: 16,
  },
  textLogIn: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textForget: {
    color: '#5DB075',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Login;
