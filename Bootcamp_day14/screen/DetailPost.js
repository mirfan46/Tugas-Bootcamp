import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const DetailPost = ({route}) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${route.params.idPost}`)
      .then((response) => {
        const post = response.data;
        setPost(post);
      });
  }, []);

  return (
    <View>
      <Text>{post.id}</Text>
      <Text>{post.userId}</Text>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};

export default DetailPost;
