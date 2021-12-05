<template>
  <div class="" v-if="allgroupUserByUserId.length !== 0 && serach != ''">
    <div class="group" v-for="(group, index) of searchByGroupName" :key="index">
      <div
        class="inside"
        @click="
          () => {
            $store.commit('addpostt');
            $store.commit('showpostt');

            this.$router.push(`/home/${group.id}`);
            $store.commit('group', group);
            $store.commit('onebytwog');
          }
        "
      >
        <div class="start">
          <img :src="image" alt="" class="img1" />
          <div class="person">
            <h5>{{ group.name }}</h5>
            <p v-if="group.post.length !== 0">
              {{ group.post[group.post.length - 1].postTitle }}
            </p>
            <p v-if="group.post.length == 0">{{ msg }}</p>
          </div>
        </div>
        <div class="end">
          <p v-if="group.post.length !== 0">
            {{
              moment(group.post[group.post.length - 1].createdAt).format(
                "DD-MM-YYYY"
              )
            }}
          </p>
          <p v-if="group.post.length === 0"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="" v-if="allgroupUserByUserId.length !== 0 && serach == ''">
    <div
      class="group"
      v-for="(group, index) of allgroupUserByUserId"
      :key="index"
    >
      <div
        class="inside"
        @click="
          () => {
            $store.commit('addpostt');
            this.$router.push(`/home/${group.group.id}`);
            $store.commit('group', group.group);
            $store.commit('onebytwog');
          }
        "
      >
        <div class="start">
          <img :src="image" alt="" class="img1" />
          <div class="person">
            <h5>{{ group.group.name }}</h5>
            <p v-if="group.group.post.length !== 0">
              {{ group.group.post[group.group.post.length - 1].postTitle }}
            </p>
            <p v-if="group.group.post.length == 0">{{ msg }}</p>
          </div>
        </div>
        <div class="end">
          <p v-if="group.group.post.length !== 0">
            {{
              moment(
                group.group.post[group.group.post.length - 1].createdAt
              ).format("DD-MM-YYYY")
            }}
          </p>
          <p v-if="group.group.post.length === 0"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="" v-if="allgroupUserByUserId.length === 0">
    <p>no groups create</p>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import gql from "graphql-tag";
import { mapMutations } from "vuex";
import moment from "moment";
@Options({
  data() {
    return {
      allgroupUserByUserId: [],
      searchByGroupName: [],
      name: "mohan",
      msg: "No Posts",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },

  computed: {
    createGroup: function () {
      return this.$store.state.createGroup;
    },
    userId: function () {
      return localStorage.getItem("userId");
    },
    d: function () {
      return this.$store.state.deletegroup;
    },
    u: function () {
      return this.$store.state.updategroupname;
    },
    serach: function () {
      return this.$store.state.serachinput;
    },
  },
  apollo: {
    searchByGroupName: {
      query: gql`
        query ($serach: String!) {
          searchByGroupName(serach: $serach) {
            name
            id
            post {
              postTitle
              createdAt
            }
          }
        }
      `,
      variables() {
        return {
          serach: this.serach,
        };
      },
    },
    allgroupUserByUserId: {
      query: gql`
        query ($userId: String!) {
          allgroupUserByUserId(userId: $userId) {
            group {
              name
              id
              post {
                postTitle
                createdAt
              }
            }
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
      fetchPolicy: "no-cache",
    },
  },
  methods: {
    ...mapMutations(["group"]),
  },
  watch: {
    d(newValue) {
      if (newValue == true)
        return this.$apollo.queries.allgroupUserByUserId.refetch();
    },
    u(newValue) {
      if (newValue == true)
        return this.$apollo.queries.allgroupUserByUserId.refetch();
    },

    createGroup(newValue) {
      console.log(newValue);
      if (newValue == false) {
        console.log("fectch now");
        this.$apollo.queries.allgroupUserByUserId.refetch();
      }
    },
    serach() {
      this.$apollo.queries.searchByGroupName.refetch();
    },
  },
  mounted() {
    console.log(this.allgroupUserByUserId, "==");
  },
  created() {
    let user = localStorage.getItem("userId");
    this.userId = user;
    this.moment = moment;
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
