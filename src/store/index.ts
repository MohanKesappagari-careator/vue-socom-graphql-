import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      user: {
        token: "",
        userId: "",
      },
    };
  },
  mutations: {
    auth(state: any, payload) {
      state.user.userId = payload.userId;
      state.user.token = payload.token;
      console.log(payload, "..");
    },
  },
});
