import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MasterPost = createContext();

const PostProvider = ({children}) => {
  const [loadDataUser, setLoadDataUser] = useState('');

  useEffect(() => {
    getLoginData();
  }, []);

  const getLoginData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('LoginData');
      return setLoadDataUser(JSON.parse(jsonValue));
      //   console.log(jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const allData = {loadDataUser};

  return <MasterPost.Provider value={allData}>{children}</MasterPost.Provider>;
};

const PostConsumer = MasterPost.Consumer;

export default MasterPost;
export {PostProvider, PostConsumer};
