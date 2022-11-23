/* eslint-disable */
// Apollo Client

import {ApolloClient, InMemoryCache} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    // serves responses fast, after a first visit
    cache: new InMemoryCache(),
})