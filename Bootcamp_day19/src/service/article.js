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

export const GET_USER_DETAIL = gql`
  query($id: Int!) {
    author: User(id: $id) {
      name: username
      email
      posts {
        id
        title
        content
      }
      addresses {
        address
      }
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query($id: Int!) {
    Post(id: $id) {
      title
      content
      user {
        author: username
        email
      }
    }
  }
`;
