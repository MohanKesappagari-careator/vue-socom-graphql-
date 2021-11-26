import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      user: {
        token: "",
        userId: "",
      },
      groupId: "",
      groupclick: true,
      groupName: "",
      profileclick: false,
    };
  },
  mutations: {
    auth(state: any, payload) {
      state.user.userId = payload.userId;
      state.user.token = payload.token;
      console.log(payload, "..");
    },
    group(state, payload) {
      state.groupId = payload.id;
      state.groupName = payload.name;
      state.groupclick = false;
    },
    profile(state) {
      state.profileclick = !state.profileclick;
    },
  },
});
