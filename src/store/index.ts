import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      currentuser: {
        token: "",
        userId: "",
        username: "",
        email: "",
        phonenumber: "",
      },
      groupId: "",
      groupclick: true,
      groupName: "",
      profileclick: false,
    };
  },
  mutations: {
    auth(state: any, payload) {
      state.currentuser.userId = payload.userId;
      state.currentuser.token = payload.token;
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
    userdetails(state, payload) {
      console.log(payload, "p");
    },
  },
});
