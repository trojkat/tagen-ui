import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient<InMemoryCache>({
  uri: `${process.env.VUE_APP_TAGEN_URL}/api/`,
  cache: new InMemoryCache(),
});
