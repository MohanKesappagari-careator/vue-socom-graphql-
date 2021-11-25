<template>
  <div
    class="group"
    v-for="(group, index) of allgroupUserByUserId"
    :key="index"
  >
    <div class="inside">
      <div class="start">
        <img :src="image" alt="" class="img1" />
        <div class="person">
          <h5>{{ group.group.name }}</h5>
          <p>{{ msg }}</p>
        </div>
      </div>
      <div class="end">
        <p>5pm</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import gql from "graphql-tag";
import { mapState } from "vuex";

@Options({
  data() {
    return {
      allgroupUserByUserId: [],

      name: "mohan",
      msg: "msg",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  apollo: {
    allgroupUserByUserId: {
      query: gql`
        query ($userId: String!) {
          allgroupUserByUserId(userId: $userId) {
            group {
              name
              id
            }
          }
        }
      `,
      variables: {
        userId: "35adc94f-d6b1-484d-95a6-43de91eccf1c",
      },
    },
  },

  mounted() {
    console.log(this.allgroupUserByUserId, "==");
  },
})
export default class Groups extends Vue {}
</script>

<style>
.img1 {
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  margin-top: 0.5rem;
}
.inside {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(228, 224, 224);
  border-bottom: 1px solid rgb(228, 224, 224);
  padding: 0rem 0.5rem 0.5rem 0.3rem;
}
.inside:hover {
  cursor: pointer;
  background: rgb(243, 241, 241);
}
.end p {
  font-size: 0.9rem;
}
.start {
  display: flex;
}
.person {
  margin-left: 2rem;
  margin-top: 0.4rem;
}
</style>
