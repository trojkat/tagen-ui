import gql from "graphql-tag";
import apollo from "../../apolloClient";

// getters
const getters = {};

// actions
const actions = {
  async getLastComments(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          lastComments {
            id
            comment
            submitDate
            timeSince
            user {
              username
              isPro
              avatar
            }
            objectName
            objectUrl
          }
        }
      `),
    });
    context.commit("SET_LAST_COMMENTS", response.data.lastComments);
  },
};

// mutations
const mutations = {
  SET_LAST_COMMENTS(state: any, lastComments: any) {
    state.lastComments = lastComments;
  },
};

// initial state
const state = {
  lastComments: Array,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
