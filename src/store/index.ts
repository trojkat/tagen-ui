import Vue from "vue";
import Vuex from "vuex";
import vod from "./modules/vod";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vod,
  },
});
