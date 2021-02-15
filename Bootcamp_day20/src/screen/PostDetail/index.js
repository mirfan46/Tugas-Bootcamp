import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {GET_SINGLE_POST} from '../../service/post';

const PostDetail = ({route, navigation}) => {
  const [idPost, setIdPost] = useState('');

  useEffect(() => {
    setIdPost(route.params.postId);
  }, []);

  const {loading, data, refetch} = useQuery(GET_SINGLE_POST, {
    variables: {id: idPost},
  });

  console.log(data);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={require('../../assets/prev.png')} />
            </TouchableOpacity>
            <Text style={styles.postTitleText}>{data.getSinglePost.title}</Text>
          </View>
          <View style={styles.author}>
            <Text style={styles.authorText}>
              Author: {data.getSinglePost.author.name}
            </Text>
            <Text style={styles.dateText}>{data.getSinglePost.createdAt}</Text>
          </View>
          <View style={styles.postImage}>
            <Image source={require('../../assets/post.png')} />
          </View>
          <View style={styles.postContent}>
            <Text style={styles.textContent}>{data.getSinglePost.title}</Text>
            <Text style={styles.textParagraph}>
              {data.getSinglePost.content}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 16,
  },
  author: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 20,
  },
  postImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  postContent: {
    justifyContent: 'center',
    marginRight: 16,
    marginLeft: 16,
  },
  postTitleText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
    marginLeft: 8,
  },
  authorText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#78746D',
  },
  dateText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#78746D',
  },
  textContent: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    color: '#3C3A36',
  },
  textParagraph: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#78746D',
  },
});

export default PostDetail;
