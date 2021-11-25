import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  uri: "http://localhost:5000/graphql",
});

export const provider = createApolloProvider({
  defaultClient: client,
});
