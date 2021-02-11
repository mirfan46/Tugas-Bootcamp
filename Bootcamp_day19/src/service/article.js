import {gql} from '@apollo/client';

export default {};

export const GET_USER_LIST = gql`
  query {
    Users {
      id
      username
    }
  }
`;

export const GET_POST_LIST = gql`
  query {
    Posts {
      id
      title
    }
  }
`;
