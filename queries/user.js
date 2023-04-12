import { gql } from "@apollo/client";

export default {
  CREATE_USER: gql`
    mutation CreateUser($input: UserRegisterInput!) {
      createUser(input: $input) {
        user {
          username
          email
          about
          avatar
          isActive
          role
        }
      }
    }
  `,
};
