import { ApolloClient, InMemoryCache, HttpLink, split, from, makeVar, ApolloLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { getMainDefinition } from '@apollo/client/utilities'

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
    }
    if (networkError) console.error(`[Network error]: ${networkError}`)
})

const wsLink =
    typeof window !== 'undefined'
        ? new GraphQLWsLink(
              createClient({
                  url: 'ws://localhost:4000/subscriptions',
              })
          )
        : null

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    credentials: 'include',
})

export const setAuthToken = makeVar('')
const authLink = setContext((_, { headers }) => {
    const token = setAuthToken()
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

let client: ApolloClient<any> | null = null

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    },
    wsLink || new ApolloLink((operation, forward) => forward(operation)),
    httpLink
)

export const getClient = () => {
    // create a new client if there's no existing one
    // or if we are running on the server.
    if (!client || typeof window === 'undefined') {
        client = new ApolloClient({
            link: from([errorLink, authLink, splitLink]),
            cache: new InMemoryCache(),
        })
    }

    return client
}
