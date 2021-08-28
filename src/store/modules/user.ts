import gql from "graphql-tag";
import apollo from "../../apolloClient";

// getters
const getters = {};

// actions
const actions = {
  async getBasicUserInfo(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          userInfo {
            username,
          }
        }
      `),
    });
    context.commit("SET_BASIC_USER_INFO", response.data.userInfo);
  },
  async getOnlineUsers(context: any) {
    const response = await apollo.query({
      query: gql(`
        query {
          onlineUsers {
            username,
            avatar,
          }
        }
      `),
    });
    context.commit("SET_ONLINE_USERS", response.data.onlineUsers);
  },
};

// mutations
const mutations = {
  SET_BASIC_USER_INFO(state: any, basicInfo: any) {
    state.basicInfo = basicInfo;
  },
  SET_ONLINE_USERS(state: any, onlineUsers: any) {
    state.onlineUsers = onlineUsers;
  },
};

// initial state
const state = {
  basicInfo: Object,
  onlineUsers: Array,
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
