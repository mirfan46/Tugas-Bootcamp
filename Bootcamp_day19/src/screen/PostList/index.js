import {useQuery} from '@apollo/client';
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';

import {GET_POST_LIST} from '../../service/article';

const PostList = ({navigation}) => {
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
            renderItem={({item}) => (
              <View style={styles.list}>
                <Text style={{fontSize: 20}} key={item.id}>
                  {item.title}
                </Text>
                <Button
                  title="Go to Post Detail"
                  onPress={() =>
                    navigation.navigate('PostDetail', {postId: item.id})
                  }
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'blue',
    paddingLeft: 150,
    paddingRight: 150,
    padding: 10,
  },
});
