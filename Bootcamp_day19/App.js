import * as React from 'react';
import {View, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  homeScreen,
  postDetailScreen,
  postListScreen,
  userDetailScreen,
  userListScreen,
} from './src/screen';
import client from './src/service';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="UserList" component={userListScreen} />
        <Stack.Screen name="UserDetail" component={userDetailScreen} />
        <Stack.Screen name="PostList" component={postListScreen} />
        <Stack.Screen name="PostDetail" component={postDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Main;
