import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {GET_POST_DETAIL} from '../../service/article';

const PostDetail = ({route}) => {
  const [idPost, setIdPost] = useState('');

  useEffect(() => {
    setIdPost(route.params.postId);
  }, []);

  const {loading, data, refetch} = useQuery(GET_POST_DETAIL, {
    variables: {id: idPost},
  });

  console.log(data);

  return (
    <View>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <View>
            <Text>Title: {data.Post.title}</Text>
            <Text>Content: {data.Post.content}</Text>
          </View>
          <View>
            <Text>Author: {data.Post.user.author}</Text>
            <Text>Email: {data.Post.user.email}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default PostDetail;
