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
    commit("SET_LAST_VODS", response.data.vods);
  },
  async getRandomVod({ commit }) {
    const response = await apollo.query({
      query: gql(`
        query {
          vod {
            coverUrl,
            video,
          }
        }
      `),
    });
    commit("SET_RANDOM_VOD", response.data.vod);
  },
};

// mutations
const mutations = {
  SET_LAST_VODS(state, lastVods) {
    state.lastVods = lastVods;
  },
  SET_RANDOM_VOD(state, vod) {
    state.randomVod = vod;
  },
};

// initial state
const state = {
  lastVods: null,
  randomVod: null,
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
