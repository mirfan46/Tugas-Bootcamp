import * as React from 'react';
import {View, Text} from 'react-native';
import {ApolloProvider} from '@apollo/client';
import client from './src/service';
import {Form, List} from './src/components';

function App() {
  return (
    <View>
      <Text>Todo App</Text>
      <Form />
      <List />
    </View>
  );
}

const Main = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default Main;
