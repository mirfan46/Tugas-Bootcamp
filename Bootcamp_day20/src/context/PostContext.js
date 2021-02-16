import React, {createContext, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GET_ALL_POSTS, GET_SINGLE_POST} from '../service/post';

const MasterPost = createContext();

const PostProvider = ({children}) => {
  const {loading: loadingAllPost, data: dataAllPost} = useQuery(GET_ALL_POSTS);
  // const [loadDataUser, setLoadDataUser] = useState('');

  // useEffect(() => {
  //   getLoginData();
  // }, []);

  // const getLoginData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('LoginData');
  //     return setLoadDataUser(JSON.parse(jsonValue));
  //     //   console.log(jsonValue);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const allData = {
    loadingAllPost,
    dataAllPost,
  };

  return <MasterPost.Provider value={allData}>{children}</MasterPost.Provider>;
};

const PostConsumer = MasterPost.Consumer;

export {PostProvider, PostConsumer};
export default MasterPost;
