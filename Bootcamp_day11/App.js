import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Todo from './components/Todo';
import users from './user.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: users,
      route: 'main',
      userSignInData: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        slogan: '',
        jobs: '',
        photo: '',
        password: '',
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      userSignInData: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        gender: data.gender,
        slogan: data.slogan,
        jobs: data.jobs,
        photo: data.photo,
        password: data.password,
      },
    });
  };

  onRouteChange = (route) => {
    this.setState({route: route});
  };

  cekLogin = (email, password) => {
    const cekEmail = this.state.user.some((user) => user.email === email);
    const cekPassword = this.state.user.some(
      (user) => user.password === password,
    );

    if (cekEmail === true && cekPassword === true) {
      let dataUser = this.state.user.filter((e) => e.email === email);
      let profile = dataUser[0];
      this.loadUser(profile);
      this.onRouteChange('profile');
    } else {
      Alert.alert('login gagal');
    }
  };

  register = (name, email, password) => {
    let dataUser = this.state.user;

    dataUser.push({
      id: this.state.user.length + 1,
      first_name: name,
      last_name: 'Robot',
      email: email,
      gender: 'NA',
      slogan: 'NA',
      jobs: 'NA',
      photo: `https://robohash.org/${name}`,
      password: password,
    });

    this.setState({
      user: dataUser,
    });

    this.onRouteChange('login');
  };

  update = (slogan, jobs) => {
    let dataUsers = this.state.user;
    dataUsers.slogan = slogan;
    let update = dataUsers.map((e) =>
      e.id === this.state.userSignInData.id
        ? {...e, slogan: slogan, jobs: jobs}
        : e,
    );

    this.setState({user: update});
  };

  render() {
    console.log(this.state.userSignInData);
    return (
      <View style={{flex: 1}}>
        {this.state.route === 'main' ? (
          <Main onRouteChange={this.onRouteChange} />
        ) : null}
        {this.state.route === 'logout' ? (
          <Main onRouteChange={this.onRouteChange} />
        ) : null}
        {this.state.route === 'login' ? (
          <Login cekLogin={this.cekLogin} />
        ) : null}
        {this.state.route === 'signup' ? (
          <SignUp register={this.register} onRouteChange={this.onRouteChange} />
        ) : null}
        {this.state.route === 'profile' ? (
          <Profile
            userSignInData={this.state.userSignInData}
            onRouteChange={this.onRouteChange}
            update={this.update}
          />
        ) : null}
        {this.state.route === 'todo' ? (
          <Todo userSignInData={this.state.userSignInData} />
        ) : null}
      </View>
    );
  }
}

export default App;
