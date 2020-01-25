import Vue from "vue";

import VueApollo from "vue-apollo";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import client from "./apolloClient";
import config from "./config";

Vue.prototype.$appConfig = config;
Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: client,
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount("#app");
