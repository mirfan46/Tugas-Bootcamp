import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://192.168.43.83:3301/api',
  cache: new InMemoryCache(),
});

export default client;
