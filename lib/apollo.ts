import { ApolloClient, InMemoryCache, HttpLink, split, from, makeVar } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities'

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
    }
    if (networkError) console.error(`[Network error]: ${networkError}`)
})

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:4000/subscriptions',
}));

const httpLink =  new HttpLink({
        uri: 'http://localhost:4000/graphql',
      })

     
export const authTokenVar = makeVar('')
const authLink = setContext((_, { headers }) => {
 const token = authTokenVar()
 console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

let client: ApolloClient<any> | null = null;

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);


export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: from([errorLink, authLink, splitLink,]),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
