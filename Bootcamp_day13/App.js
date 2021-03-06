import React, {Component} from 'react';
import {View, Alert} from 'react-native';
import Main from './components/Main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Todo from './components/Todo';
import users from './user.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
  constructor(props) {
    super(props);
    this.getLoginData();
    this.state = {
      user: users,
      route: 'main',
      dataLogin: [],
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

  storeLoginData = async () => {
    const listDataLogin = await AsyncStorage.getItem('loginData');
    let myDataLogin = listDataLogin !== null ? JSON.parse(listDataLogin) : [];
    try {
      myDataLogin.push(this.state.userSignInData);
      await AsyncStorage.setItem('loginData', JSON.stringify(myDataLogin));
    } catch (e) {
      console.log(e);
    } finally {
      this.getLoginData();
      // this.setState({route: 'profile'});
    }
  };

  getLoginData = async () => {
    try {
      const loginData = await AsyncStorage.getItem('loginData');
      console.log({getLoginData: JSON.parse(loginData)});
      if (loginData !== null) {
        this.setState({
          route: 'profile',
          dataLogin: JSON.parse(loginData),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  removeLoginData = async () => {
    try {
      await AsyncStorage.removeItem('loginData');
    } catch (e) {
      console.log(e);
    } finally {
      this.getLoginData();
    }
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
      // this.state.dataLogin.push(profile);
      // this.storeLoginData(profile);
      // this.getLoginData(profile);
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

  logout = () => {
    this.setState({route: 'main'});
    this.removeLoginData();
  };

  componentDidMount() {
    this.getLoginData;
  }

  render() {
    console.log(this.state.dataLogin);
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
            logout={this.logout}
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
