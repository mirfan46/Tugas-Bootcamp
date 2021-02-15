import {gql} from '@apollo/client';

export default {};

export const GET_ALL_POSTS = gql`
  query {
    getAllPosts {
      id
      title
      author {
        name
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query($id: Int!) {
    getSinglePost(postId: $id) {
      id
      title
      content
      createdAt
      author {
        id
        name
      }
      comments {
        id
        content
        createdAt
        author {
          id
          name
        }
      }
    }
  }
`;
