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
                  url: process.env.NEXT_PUBLIC_WS_ENDPOINT || 'ws://localhost:4000/graphql',
              })
          )
        : null

const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HTTP_ENDPOINT,
    credentials: 'include',
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

export const getClient = (getToken: () => Promise<string | null>) => {
    const authLink = setContext(async (_, { headers }) => {
        const token = await getToken()
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : '',
            },
        }
    })

    if (!client || typeof window === 'undefined') {
        client = new ApolloClient({
            link: from([authLink, errorLink, splitLink]),
            cache: new InMemoryCache(),
        })
    }

    return client
}
