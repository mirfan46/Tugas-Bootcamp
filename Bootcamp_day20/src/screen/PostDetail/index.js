import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const PostDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/prev.png')} />
        <Text style={styles.postTitleText}>Post Title</Text>
      </View>
      <View style={styles.author}>
        <Text style={styles.authorText}>Author: Husen</Text>
        <Text style={styles.dateText}>20 Feb 2020</Text>
      </View>
      <View style={styles.postImage}>
        <Image source={require('../../assets/post.png')} />
      </View>
      <View style={styles.postContent}>
        <Text style={styles.textContent}>Introduction</Text>
        <Text style={styles.textParagraph}>
          You can launch a new career in web develop- ment today by learning
          HTML & CSS. You don't need a computer science degree or expensive
          software. All you need is a computer, a bit of time, a lot of
          determination, and a teacher you trust. Once the form data has been
          validated on the client-side, it is okay to submit the form. And,
          since we covered validation in the previous article, we're ready to
          submit! This article looks at what happens when a user submits a form
          — where does the data go, and how do we handle it when it gets there?
          We also look at some of the security concerns.
        </Text>
      </View>
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
    justifyContent: 'space-between',
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
    marginRight: 140,
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
