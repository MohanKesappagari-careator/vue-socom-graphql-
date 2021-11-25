<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 side">
        <sidebar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "./Sidebar.vue";
@Options({
  components: {
    Sidebar,
  },
})
export default class Home extends Vue {}
</script>
<style>
.side {
  margin-left: -7rem;
  margin-top: 0.5rem;
}
</style>
