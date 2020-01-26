import Vue from "vue";
import Vuex from "vuex";
import vod from "./modules/vod";
import user from "./modules/user";
import comment from "./modules/comment";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vod,
    user,
    comment,
  },
});
