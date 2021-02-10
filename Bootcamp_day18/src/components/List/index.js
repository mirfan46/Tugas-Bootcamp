import {useQuery} from '@apollo/client';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';

import {GET_TODO} from '../../service/todo';

const List = () => {
  const {loading, data, refetch} = useQuery(GET_TODO);
  console.log({loading, data});
  return (
    <View>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <TouchableOpacity onPress={() => refetch()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
          <FlatList
            data={data.todo}
            renderItem={({item, index}) => (
              <Text key={item.id}>
                {index + 1}. {item.title} {item.description}
              </Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
      <Text>List</Text>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
