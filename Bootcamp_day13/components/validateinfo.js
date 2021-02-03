import {Alert} from 'react-native';

export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    Alert.alert('Name required');
  }

  if (!values.email) {
    Alert.alert('Email required');
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    Alert.alert('Email address is invalid');
  }

  if (!values.password) {
    Alert.alert('Password is required');
  } else if (values.password.length < 6) {
    Alert.alert('Password needs to be 6 characters or more');
  }

  //   if (!values.slogan) {
  //     Alert.alert('Slogan is required');
  //   }

  //   if (!values.jobs) {
  //     Alert.alert('Jobs is required');
  //   }

  //   if (!values.note) {
  //     Alert.alert('Note is required');
  //   }
  return errors;
}
