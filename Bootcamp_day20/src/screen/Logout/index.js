import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import MasterAuth from '../../context/AuthContext';

const Logout = () => {
  const AuthMaster = useContext(MasterAuth);
  console.log(AuthMaster);

  useEffect(() => {
    AuthMaster.logout();
  }, []);

  return (
    <View>
      <Text>Logout</Text>
    </View>
  );
};

export default Logout;
