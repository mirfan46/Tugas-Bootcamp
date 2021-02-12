import {useQuery} from '@apollo/client';
import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {GET_USER_DETAIL} from '../../service/article';

const UserDetail = ({navigation, route}) => {
  const [idUser, setIdUser] = useState('');
  useEffect(() => {
    setIdUser(route.params.userId);
  }, []);

  const {loading, data, refetch} = useQuery(GET_USER_DETAIL, {
    variables: {id: idUser},
  });

  console.log(data);

  return (
    <View>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <View>
            <Text>User Profile</Text>
            <Text>Name: {data.author.name}</Text>
            <Text>Email: {data.author.email}</Text>
          </View>
          <View>
            <Text>Article List :</Text>
            <FlatList
              data={data.author.posts}
              renderItem={({item}) => (
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.content}</Text>
                </View>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default UserDetail;
