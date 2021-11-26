<template>
  <div class="sidebar">
    <div class="top">
      <img :src="image" alt="" class="img" @click="$store.commit('profile')" />
      <div class="icon">
        <i class="fas fa-ellipsis-v fa-lg"></i>
      </div>
    </div>
    <div class="notification">
      <i class="fas fa-bell-slash fa-2x"></i>
      <div class="msg">
        <h5>Get notified of new messages</h5>
        <p>Turn on desktop notifications</p>
      </div>
    </div>
    <div class="search">
      <div class="in">
        <i class="fas fa-search ic"></i>
        <input type="text" placeholder="enter text" class="input" />
      </div>
    </div>
    <Groups />
  </div>
</template>

<script>
import { Vue, Options } from "vue-class-component";
import Groups from "../components/Groups";
@Options({
  data() {
    return {
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  components: {
    Groups,
  },
})
export default class Sidebar extends Vue {}
</script>

<style>
.search {
  padding: 1rem;
  background: rgb(231, 239, 240);
}
.in {
  border-radius: 2rem;
  background-color: white;
  color: rgb(196, 189, 189);
}
.ic {
  margin-left: 1rem;
}

.input {
  width: 80%;
  height: 2rem;
  outline: none;
  margin-left: 2rem;
  border: transparent;
}
.input::placeholder {
  color: rgb(196, 189, 189);
}
.msg {
  margin-top: 0.5rem;
}
.sidebar {
  width: 100%;
}
.img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: blue;
  cursor: pointer;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(231, 239, 240);
  padding: 0.5rem;
}
.fa-bell-slash {
  color: white;
}
.fa-ellipsis-v {
  color: rgb(201, 194, 194);
}
.notification {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(151, 213, 238);
}
</style>
