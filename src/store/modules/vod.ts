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
            proOnly,
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
            proOnly,
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
  async getTopRated(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          topRated {
            title,
            url,
            insertDate,
            proOnly,
            coverUrl,
            category {
              title,
            },
            rating,
          }
        }
      `),
    });
    context.commit("SET_TOP_RATED", response.data.topRated);
  },
  async getTopViewed(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          topViewed {
            title,
            url,
            insertDate,
            proOnly,
            coverUrl,
            category {
              title,
            },
          }
        }
      `),
    });
    context.commit("SET_TOP_VIEWED", response.data.topViewed);
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
  SET_TOP_RATED(state: any, topRated: any) {
    state.topRated = topRated;
  },
  SET_TOP_VIEWED(state: any, topViewed: any) {
    state.topViewed = topViewed;
  },
};

// initial state
const state = {
  lastVods: null,
  randomVod: null,
  categories: null,
  topRated: null,
  topViewed: null,
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
