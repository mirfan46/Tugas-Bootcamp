import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import {users} from './user';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      route: 'signin',
      isSignedIn: false,
    };
  }

  onRouteChange = (route) => {
    if ((route = 'signout')) {
      this.setState({isSignedIn: false});
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  };

  render() {
    return (
      <Profile />
      // <View>
      //   <Navigation
      //     isSignedIn={this.state.isSignedIn}
      //     onRouteChange={this.onRouteChange}
      //   />
      //   {this.state.route === 'home' ? (
      //     <View>
      //       <Profile />
      //     </View>
      //   ) : this.state.route === 'signin' ? (
      //     <Login onRouteChange={this.onRouteChange} />
      //   ) : (
      //     <Register onRouteChange={this.onRouteChange} />
      //   )}
      // </View>
    );
  }
}

export default App;
