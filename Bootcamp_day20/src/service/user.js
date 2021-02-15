import {gql} from '@apollo/client';

export default {};

export const LOGIN = gql`
  mutation ProcessLogin($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      id
      name
      email
      token
    }
  }
`;

export const SIGNUP = gql`
  mutation ProcessSignUp($name: String!, $email: String!, $password: String!) {
    register(input: {name: $name, email: $email, password: $password}) {
      id
      email
      name
    }
  }
`;
