import { gql } from "@apollo/client";

export default {
  SEND_FRIEND_REQUEST: gql`
    mutation SendFriendRequest($clerkId: String!, $contactUserEmail: String!) {
      sendFriendRequest(
        clerkId: $clerkId
        contactUserEmail: $contactUserEmail
      ) {
        receiver {
          username
          email
        }
      }
    }
  `,
};
