import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://10.75.101.12:8080/v1/graphql',
  cache: new InMemoryCache(),
});

export default client;
