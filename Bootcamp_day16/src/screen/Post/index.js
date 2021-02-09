import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {PostConsumer, PostProvider} from '../../context/PostContext';

const Post = () => {
  const Item = ({title, body}) => (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );

  const renderItem = ({item}) => <Item title={item.title} body={item.body} />;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PostConsumer>
        {(value) => {
          const {dataPost, loading} = value;
          return (
            <>
              {loading ? (
                <View style={{justifyContent: 'center', flex: 1}}>
                  <ActivityIndicator color="red" size="large" />
                </View>
              ) : (
                <FlatList
                  data={dataPost}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                />
              )}
            </>
          );
        }}
      </PostConsumer>
    </View>
  );
};

export default () => (
  <PostProvider>
    <Post />
  </PostProvider>
);
