import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {InputSearch, CourseCard} from '../../components/';
import {GET_ALL_POSTS} from '../../service/post';

const Results = ({navigation}) => {
  const {loading, data, refetch} = useQuery(GET_ALL_POSTS);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../../assets/prev.png')} />
        </TouchableOpacity>
        <InputSearch width={315} placeholder="Search" />
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>0 Results</Text>
      </View>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : (
        <>
          <FlatList
            data={data.getAllPosts}
            renderItem={({item}) => (
              <CourseCard
                onPress={() =>
                  navigation.navigate('PostDetail', {postId: item.id})
                }
                title={item.title}
                author={item.author.name}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  result: {
    flexDirection: 'row',
    marginLeft: 16,
    marginBottom: 32,
  },
  resultText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
  },
});

export default Results;
