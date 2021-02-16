import {
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

const httpLink = new HttpLink({uri: 'http://192.168.43.83:3301/api'});

const authMiddleware = new ApolloLink(async (operation, forward) => {
  // add the authorization to the headers
  let A = await AsyncStorage.getItem('Token');

  if (A !== null) {
    operation.setContext({
      headers: {
        authorization: `bearer ${A}`,
      },
    });
    console.log('with Token');
    return forward(operation);
  } else {
    operation.setContext({
      headers: {
        authorization: ``,
      },
    });
    console.log('without Token');
    return forward(operation);
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
