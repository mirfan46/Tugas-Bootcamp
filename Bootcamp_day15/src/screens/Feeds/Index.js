import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator, Button} from 'react-native';
import useFetcher from '../../components/Hooks/useFetcher';

function Feeds({navigation}) {
  const [getData] = new useFetcher();
  const [listPosting, setListPosting] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    prosesDataPosting();
  });

  const prosesDataPosting = async () => {
    let dataPosting = await getData(
      'https://jsonplaceholder.typicode.com/posts',
    );
    // console.log(dataPosting);
    setListPosting(dataPosting);
    setLoading(true);
  };

  const Item = ({title, body, id}) => (
    <View>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Button
        title="detail"
        onPress={() => navigation.navigate('Detail', {idPost: id})}
      />
    </View>
  );

  const renderItem = ({item}) => {
    <Item title={item.title} body={item.body} id={item.id} />;
  };

  return (
    <>
      {isLoading === true ? (
        <View style={{justifyContent: 'center', flex: 1}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View style={{flex: 10, padding: 10}}>
          <FlatList
            data={listPosting}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </>
  );
}

export default Feeds;
