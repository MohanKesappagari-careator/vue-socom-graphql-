<template>
  <div class="sidebar">
    <div class="top">
      <img :src="image" alt="" class="img" @click="$store.commit('profile')" />
      <div class="icon">
        <i class="fas fa-ellipsis-v fa-lg"></i>
      </div>
    </div>
    <div class="notification">
      <div v-if="!creategroup">
        <h5>Create Group</h5>
        <div class="msg">
          <button class="btn btn-success" @click="publicgroup()">Public</button>
          <button class="btn btn-success" @click="privategroup()">
            Private
          </button>
        </div>
      </div>
      <div v-if="creategroup">
        <h5>You Creating {{ grouptype }} Group</h5>
        <div class="name1">
          <input type="text" class="input1" v-model="name" />
          <i
            class="fas fa-check check"
            style="color: blue; margin-left: 0.5rem"
            @click="createGroup()"
          ></i>
          <i
            class="fas fa-times check"
            style="color: red"
            @click="cancel()"
          ></i>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="in">
        <i class="fas fa-search ic"></i>
        <input type="text" placeholder="enter text" class="input" />
      </div>
    </div>
    <div class="ff">
      <Groups />
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { Vue, Options } from "vue-class-component";
import Groups from "../components/Groups";
@Options({
  data() {
    return {
      creategroup: false,
      grouptype: "",
      name: "",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  components: {
    Groups,
  },
  methods: {
    publicgroup() {
      this.grouptype = "public";
      this.creategroup = true;
    },
    privategroup() {
      this.grouptype = "private";
      this.creategroup = true;
    },
    cancel() {
      this.grouptype = "";
      this.creategroup = false;
    },
    async createGroup() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($createGroupInput: CreateGroupInput!) {
              createGroup(createGroupInput: $createGroupInput) {
                id
              }
            }
          `,
          variables: {
            createGroupInput: {
              name: this.name,
              type: this.grouptype,
            },
          },
        })
        .then(() => {})
        .catch((e) => console.log(e));
      //await this.$apollo.queries.allgroupUserByUserId.refetch();

      this.name = "";
      this.type = "";
      this.creategroup = false;
    },
  },
})
export default class Sidebar extends Vue {}
</script>

<style>
.name1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  margin-right: 0.8rem;
  margin-bottom: 0.3rem;
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
  align-items: center;
  flex-direction: column;
}
</style>
