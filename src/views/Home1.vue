<template>
  <div class="full">
    <div class="first">
      <div
        class=""
        v-if="!$store.state.profileclick && !$store.state.createGroup"
      >
        <sidebar />
      </div>
      <div
        class=""
        v-if="$store.state.profileclick && !$store.state.createGroup"
      >
        <Profile />
      </div>
      <div
        class=""
        v-if="!$store.state.profileclick && $store.state.createGroup"
      >
        <CreateGroup />
      </div>
    </div>
    <div class="second">
      <div class="">
        <startup />
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import Sidebar from "./Sidebar.vue";
import Startup from "../components/Startup.vue";
import Profile from "../components/Profile.vue";
import CreateGroup from "../components/CreateGroup.vue";
@Options({
  data() {
    return {
      main: true,
    };
  },
  components: {
    Sidebar,
    Startup,
    Profile,
    CreateGroup,
  },
})
export default class Home1 extends Vue {}
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
