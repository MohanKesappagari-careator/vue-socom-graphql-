<template>
  <div class="topnav">
    <div class="user">
      <img :src="image" alt="" class="img" />
      <div class="userd">
        <h5>{{ $store.state.groupName }}</h5>
      </div>
    </div>
    <div class="icon">
      <i class="fas fa-ellipsis-v fa-lg"></i>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
})
export default class Main extends Vue {}
</script>

<style>
.topnav {
  margin-top: 0.4rem;
  background: rgb(231, 239, 240);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.user {
  display: flex;
}
.userd {
  margin-left: 0.8rem;
}
</style>
