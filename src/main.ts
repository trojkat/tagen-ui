import Vue from "vue";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueApollo);


const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.VUE_APP_TAGEN_URL}/api`,
});

const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount("#app");
