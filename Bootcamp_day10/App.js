import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import {users} from './user';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: users,
      route: 'main',
      userSignInData: [],
    };
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  };

  cekLogin = (email, password) => {
    const cekEmail = this.state.user.some((user) => user.email === email);
    const cekPassword = this.state.user.some(
      (user) => user.password === password,
    );

    if (cekEmail === true && cekPassword === true) {
      let dataUser = this.state.userSignInData;
      const filterDataUser = this.state.user.filter((e) => e.email === email);
      dataUser.push(filterDataUser);
      this.setState({userSignInData: dataUser});
      this.onRouteChange('profile');
    } else {
      Alert.alert('login gagal');
    }
  };

  render() {
    return (
      <View>
        {this.state.route === 'main' ? (
          <Main onRouteChange={this.onRouteChange} />
        ) : (
          <View></View>
        )}
        {this.state.route === 'login' ? (
          <Login cekLogin={this.cekLogin} />
        ) : (
          <View></View>
        )}
        {this.state.route === 'signup' ? <SignUp /> : <View></View>}
        {this.state.route === 'profile' ? (
          <Profile userSignInData={this.state.userSignInData} />
        ) : (
          <View></View>
        )}
      </View>
    );
  }
}

export default App;
