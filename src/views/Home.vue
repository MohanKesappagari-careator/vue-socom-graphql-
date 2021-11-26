<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-5 side" v-if="!$store.state.profileclick">
        <sidebar />
      </div>
      <div class="col-md-5 side" v-if="$store.state.profileclick">
        <Profile />
      </div>
      <div class="col-md-7" v-if="!$store.state.groupclick">
        <Main />
      </div>
      <div class="col-md-7" v-if="$store.state.groupclick">
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
.container-fluid {
  overflow: hidden;
}

.side {
  overflow: hidden;
}
</style>
