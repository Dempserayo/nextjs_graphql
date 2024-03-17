import { InMemoryCache } from "@apollo/client";
import { ApolloClient, HttpLink } from "@apollo/client"; // Corregido aquí
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"; // Corregido aquí

export const { getClient } = registerApolloClient(() => {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: "https://rickandmortyapi.com/graphql", // Reemplaza esto con tu endpoint GraphQL
    }),
  });
  return client;
});
