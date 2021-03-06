import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {InputSearch, CategoryButton, CourseCard} from '../../components';
import {GET_ALL_POSTS} from '../../service/post';
import MasterPost from '../../context/PostContext';

const Home = ({props, navigation}) => {
  const {loading, data, refetch} = useQuery(GET_ALL_POSTS);
  const PostMaster = useContext(MasterPost);
  console.log(PostMaster);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.helloText}>Hello,</Text>
          <Text style={styles.userText}>Juan Antonieta</Text>
        </View>
        <Image source={require('../../assets/notification.png')} />
      </View>
      <View style={styles.search}>
        <InputSearch
          placeholder="Search"
          width={380}
          onPress={() => navigation.navigate('Results')}
        />
      </View>
      <View style={styles.category}>
        <Text style={styles.categoryText}>Category:</Text>
        <CategoryButton width={50} text="#CSS" />
        <CategoryButton width={50} text="#UX" />
        <CategoryButton width={50} text="#Swift" />
        <CategoryButton width={50} text="#UI" />
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
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  category: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  helloText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#3C3A36',
  },
  userText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 32,
    color: '#333333',
  },
  categoryText: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#3C3A36',
  },
});

export default Home;
