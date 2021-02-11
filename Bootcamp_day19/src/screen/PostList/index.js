import {useQuery} from '@apollo/client';
import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

import {GET_POST_LIST} from '../../service/article';

const PostList = () => {
  const {loading, data, refetch} = useQuery(GET_POST_LIST);
  console.log({loading, data});

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <FlatList
            data={data.Posts}
            renderItem={({item, index}) => (
              <Text key={item.id}>{item.title}</Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

export default PostList;
