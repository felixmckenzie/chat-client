import { gql } from "@apollo/client";

export default {
  GET_USER: gql`
    query GetUser($clerkId: String!) {
      getUser(clerkId: $clerkId) {
        username
        email
        about
        avatar
        channels {
          name
          messages {
            sender {
              username
            }
            text
          }
        }
        contacts {
          contactUser{
            username
          }
        }
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
