<template>
  <div class="con">
    <img :src="image" alt="" class="img2" />
    <div class="content">
      <h1>Keep You Connect With Other</h1>
      <p>This will increase you relations</p>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      image:
        "https://www.acecloudhosting.com/blog/wp-content/uploads/2020/04/covid-19-tips-to-stay-connected-social-distancing.jpg",
    };
  },
})
export default class Startup extends Vue {}
</script>

<style>
.img2 {
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.con {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
}
.content {
  margin-top: 0.4rem;
  color: gray;
}
</style>
