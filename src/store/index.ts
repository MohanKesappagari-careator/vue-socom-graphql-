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
      createGroup: false,
      grouptype: "",
      deletegroup: false,
      updategroupname: false,
      onebytwoo: false,
      addpost: false,
      createpost: false,
      search: true,
      serachinput: "",
      showpost: false,
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
    grouppubliccreate(state) {
      state.createGroup = !state.createGroup;
      state.grouptype = "public";
    },
    groupprivatecreate(state) {
      state.createGroup = !state.createGroup;
      state.grouptype = "private";
    },
    cancel(state) {
      state.createGroup = !state.createGroup;
      state.grouptype = "";
    },
    userdetails(state, payload) {
      console.log(payload, "p");
    },
    dgroup(state) {
      state.deletegroup = !state.deletegroup;
    },
    updateg(state) {
      state.updategroupname = !state.updategroupname;
    },
    onebytwog(state) {
      state.onebytwoo = false;
    },
    onebytwogg(state) {
      state.onebytwoo = true;
    },
    addpostm(state) {
      state.addpost = !state.addpost;
    },
    addpostt(state) {
      state.addpost = false;
    },
    createpostg(state) {
      state.createpost = !state.createpost;
    },
    createpostt(state) {
      state.createpost = false;
    },
    serachm(state) {
      state.search = !state.serach;
    },
    serachinputm(state, payload) {
      state.serachinput = payload;
    },
    showpostm(state) {
      state.showpost = true;
    },
    showpostt(state) {
      state.showpost = false;
    },
  },
});
