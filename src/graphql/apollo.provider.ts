import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createApolloProvider } from "@vue/apollo-option";
const token = localStorage.getItem("token") || "";
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache: cache,
  uri: "http://localhost:5000/graphql",
  headers: {
    authorization: `Bearer ${token}`,
  },
});

export const provider = createApolloProvider({
  defaultClient: client,
});
