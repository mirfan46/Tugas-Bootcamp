import {gql} from '@apollo/client';

export default {};
export const GET_TODO = gql`
  query MyQuery {
    todo {
      id
      idUser
      title
      description
      status
    }
  }
`;

export const INSERT_TODO = gql`
  mutation MyMutation(
    $idUser: Int
    $title: String!
    $description: String!
    $status: Boolean
  ) {
    insert_todo(
      objects: {
        idUser: $idUser
        title: $title
        description: $description
        status: $status
      }
    ) {
      returning {
        idUser
        title
        description
        status
      }
    }
  }
`;
