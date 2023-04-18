import { gql } from "@apollo/client";

export default {
  GET_USER: gql`
    query GetUser($clerkId: String!) {
      getUser(clerkId: $clerkId) {
        username
        email
        about
        avatar
      }
    }
  `,
  CREATE_USER: gql`
    mutation CreateUser($input: UserRegisterInput!) {
      createUser(input: $input) {
        username
        email
        about
        avatar
        isActive
        role
      }
    }
  `,
};
