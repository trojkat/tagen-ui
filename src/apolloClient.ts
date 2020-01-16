import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.VUE_APP_TAGEN_URL}/api`,
});
