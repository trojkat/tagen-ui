import gql from "graphql-tag";
import apollo from "../../apolloClient";

// getters
const getters = {};

// actions
const actions = {
  async getLastVods(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          vods(first: 9) {
            title,
            url,
            time,
            category {
              title,
            },
            coverUrl,
            commentsCounter,
            insertDate,
          }
        }
      `),
    });
    context.commit("SET_LAST_VODS", response.data.vods);
  },
  async getRandomVod(context: any) {
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
    context.commit("SET_RANDOM_VOD", response.data.vod);
  },
  async getCategories(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          categories {
            id,
            title,
          }
        }
      `),
    });
    context.commit("SET_CATEGORIES", response.data.categories);
  },
};

// mutations
const mutations = {
  SET_LAST_VODS(state: any, lastVods: any) {
    state.lastVods = lastVods;
  },
  SET_RANDOM_VOD(state: any, vod: object) {
    state.randomVod = vod;
  },
  SET_CATEGORIES(state: any, categories: any) {
    state.categories = categories;
  },
};

// initial state
const state = {
  lastVods: null,
  randomVod: null,
  categories: null,
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
