import {useQuery} from '@apollo/client';
import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';

import {GET_USER_LIST} from '../../service/article';

const UserList = () => {
  const {loading, data, refetch} = useQuery(GET_USER_LIST);
  console.log({loading, data});
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <FlatList
            data={data.Users}
            renderItem={({item, index}) => (
              <Text style={{fontSize: 20}} key={item.id}>
                {item.username}
              </Text>
            )}
            keyExtractor={(item) => item.id}
          />
        </>
      )}
    </View>
  );
};

export default UserList;
