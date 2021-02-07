import React, {useEffect, useState} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import axios from 'axios';

const Post = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/`)
      .then((response) => {
        const data = response.data;
        setData(data);
      });
  }, []);

  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;

  const Item = ({title, id}) => (
    <View>
      <Text>{title}</Text>
      <Text>{id}</Text>
      <Button
        title="detail post"
        onPress={() => navigation.navigate('DetailPost', {idPost: id})}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Post;
