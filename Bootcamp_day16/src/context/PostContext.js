import React, {createContext, useEffect, useState} from 'react';
import {getPosts} from '../services/post.api';

const MasterPost = createContext();

const PostProvider = ({children}) => {
  const [dataPost, setDataPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostData();
  }, []);

  getPostData = async () => {
    try {
      const dataRaw = await getPosts();
      setDataPost(dataRaw);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const allData = {dataPost, loading, getPostData};

  return <MasterPost.Provider value={allData}>{children}</MasterPost.Provider>;
};

const PostConsumer = MasterPost.Consumer;

export default MasterPost;

export {PostProvider, PostConsumer};
