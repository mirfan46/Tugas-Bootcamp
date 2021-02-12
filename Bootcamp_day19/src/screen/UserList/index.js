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

import {GET_USER_LIST} from '../../service/article';

const UserList = ({navigation}) => {
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
            renderItem={({item}) => (
              <View style={styles.list}>
                <Text style={{fontSize: 20}} key={item.id}>
                  {item.username}
                </Text>
                <Button
                  title="Go to User Detail"
                  onPress={() =>
                    navigation.navigate('UserDetail', {userId: item.id})
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

export default UserList;

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'blue',
    paddingLeft: 150,
    paddingRight: 150,
    padding: 10,
  },
});
