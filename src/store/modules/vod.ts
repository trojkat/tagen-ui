import gql from "graphql-tag";
import apollo from "../../apolloClient";

// getters
const getters = {};

// actions
const actions = {
  async getLastVods({ commit }) {
    const response = await apollo.query({
      query: gql(`
        query {
          vods(first: 9) {
            title,
            url,
            time,
            category {
              title,
              slug
            },
            coverUrl,
          }
        }
      `),
    });
    commit("SET_LASTVODS", response.data.vods);
  },
};

// mutations
const mutations = {
  SET_LASTVODS(state, lastVods) {
    state.lastVods = lastVods;
  },
};

// initial state
const state = {
  lastVods: [],
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
