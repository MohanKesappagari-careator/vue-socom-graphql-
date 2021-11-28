<template>
  <div class="full">
    <div class="first">
      <div class="first-1" v-if="!$store.state.profileclick">
        <sidebar />
      </div>
      <div class="" v-if="$store.state.profileclick">
        <Profile />
      </div>
    </div>
    <div class="second">
      <div class="" v-if="!$store.state.groupclick">
        <Main />
      </div>
      <div class="" v-if="$store.state.groupclick">
        <startup />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "./Sidebar.vue";
import Main from "../components/Main.vue";
import Startup from "../components/Startup.vue";
import Profile from "../components/Profile.vue";
@Options({
  data() {
    return {
      main: true,
    };
  },
  components: {
    Sidebar,
    Main,
    Startup,
    Profile,
  },
})
export default class Home extends Vue {}
</script>

<style>
.full {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.first {
  width: 30vw;
  height: 100vh;
  overflow-y: scroll;
}

.second {
  width: 70vw;
  height: 100vh;
  overflow-y: scroll;
}
</style>
