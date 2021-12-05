<template>
  <div class="m">
    <div class="topnav">
      <div class="user">
        <img :src="image" alt="" class="img" />
        <div class="userd">
          <h5>{{ groupname }}</h5>

          <p
            style="
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 75ch;
              font-size: 0.8rem;
            "
          >
            {{ groupusers.toString() }}
          </p>
        </div>
      </div>
      <div class="icon" @click="open1()" style="cursor: pointer">
        <i class="fas fa-ellipsis-v fa-lg"></i>
      </div>
    </div>
    <div class="card groupedit" v-if="groupedit">
      <div
        class="p"
        style="margin-top: 0.4rem"
        @click="
          () => {
            onebytwoF();
            open1();
          }
        "
      >
        <p>Group Info</p>
      </div>
      <div class="p">
        <p>Update</p>
      </div>
      <div class="p" @click="exitGroup()">
        <p>Exit Group</p>
      </div>
    </div>
    <div class="king">
      <div
        class="post posti"
        v-if="onebytwo && !addpost && !createpost"
        @click="onebytwoG()"
      >
        <div>
          <div
            :class="post.user.id === userId ? 'card3' : 'card1'"
            v-for="(post, index) of postdata"
            :key="index"
          >
            <div class="postimage">
              <p style="color: #128c7e">{{ post.user.username }}</p>
              <p>
                <strong class="category">
                  {{ post.category.parent.parent.name }}
                  <i class="fas fa-angle-double-right"></i>
                  {{ post.category.parent.name }}
                  <i class="fas fa-angle-double-right"></i>
                  {{ post.category.name }}
                </strong>
              </p>
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                alt=""
                style="width: 19rem; height: 8rem"
              />
            </div>
            <div class="postcontent">
              <p><strong>Title :</strong> {{ post.postTitle }}</p>

              <p>
                <strong> Description: </strong>
                {{ post.description }}
              </p>
              <p><strong>Is Buy :</strong> {{ post.isBuy }}</p>
              <p>
                <strong>Posted At : </strong
                >{{ moment(post.createdAt).format("DD-MM-YYYY") }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="infog" v-if="onebytwo && !addpost && !createpost">
        <h3 style="margin-left: 6rem; margin-top: 1rem">Group Info</h3>
        <div class="groupimg">
          <img :src="image" alt="" />
          <div class="name" v-if="!nameedit">
            <h4>{{ groupname }}</h4>
            <i
              style="margin-left: 2rem; margin-top: 0.5rem"
              class="fas fa-pen edit"
              @click="edit2()"
            ></i>
          </div>
          <div class="name" v-if="nameedit">
            <input type="text" class="input1" v-model="groupname" />
            <i
              class="fas fa-check check"
              @click="
                () => {
                  updateName();
                  edit2();
                }
              "
            ></i>
          </div>
          <div class="c">
            <p>Group .</p>
            <p>{{ groupusers.length }} participants</p>
          </div>
        </div>
        <div class="groupdes">
          <div class="name" v-if="!descriptionedit && groupdescription == null">
            <h6>add group description</h6>
            <i class="fas fa-pen edit" @click="edit1()"></i>
          </div>
          <div class="name" v-if="!descriptionedit && groupdescription != null">
            <h6>{{ groupdescription }}</h6>
            <i class="fas fa-pen edit" @click="edit1()"></i>
          </div>

          <div class="name" v-if="descriptionedit">
            <input type="text" class="input1" v-model="groupdescription" />
            <i
              class="fas fa-check check"
              @click="
                () => {
                  updateDescription();
                  edit1();
                }
              "
            ></i>
          </div>
        </div>
        <div class="kk" id="users">
          <p>{{ groupusers.length }} participants</p>

          <div class="groupus" v-for="(user, index) of guser" :key="index">
            <img :src="image" alt="" />
            <div class="groupuse" v-if="user.user.id == userId">
              <p>You</p>
              <p v-if="user.isAdmin == true" class="admin">Group admin</p>
            </div>
            <div class="groupuse" v-if="user.user.id != userId">
              <p>{{ user.user.username }}</p>
              <p v-if="user.isAdmin == true" class="admin">Group admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="post" v-if="!onebytwo && !showpost && !addpost && !createpost">
      <div
        :class="post.user.id === userId ? 'card2' : 'card1'"
        v-for="(post, index) of postdata"
        :key="index"
      >
        <div class="postimage">
          <p style="color: #128c7e">{{ post.user.username }}</p>
          <p>
            <strong class="category">
              {{ post.category.parent.parent.name }}
              <i class="fas fa-angle-double-right"></i>
              {{ post.category.parent.name }}
              <i class="fas fa-angle-double-right"></i> {{ post.category.name }}
            </strong>
          </p>
          <img
            src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
            alt=""
            style="width: 19rem; height: 8rem; cursor: pointer"
            @click="postdeatils(post.id)"
          />
        </div>
        <div class="postcontent">
          <p><strong>Title :</strong> {{ post.postTitle }}</p>

          <p>
            <strong> Description: </strong>
            {{ post.description }}
          </p>
          <p><strong>Is Buy :</strong> {{ post.isBuy }}</p>
          <p>
            <strong>Posted At : </strong
            >{{ moment(post.createdAt).format("DD-MM-YYYY") }}
          </p>
        </div>
      </div>
    </div>
    <div class="postdata" v-if="showpost && !addpost">
      <div class="" v-for="(post, index) of postdata" :key="index">
        <div class="postdd" v-if="post.id === postId">
          <div class="postdataimg">
            <img
              src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
              alt=""
              style="width: 40rem; height: 15rem; cursor: pointer"
              @click="postdeatils(post.id)"
            />
          </div>
          <h2>{{ post.postTitle }}</h2>
          <div
            class="att"
            v-for="(item, index) of post.postattribute"
            :key="index"
          >
            <p class="attname">
              <strong>{{ item.attribute.name }}</strong>
            </p>
            <p><strong>:</strong></p>
            <p class="attval">{{ item.attributeValue }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="post" v-if="addpost && !createpost">
      <div class="lll">
        <div class="kkk">
          <select class="form-select" @change="onChange($event)">
            <option v-for="(cat, i) of dropdown1data" :value="cat.id" :key="i">
              {{ cat.name }}
            </option>
          </select>

          <select
            class="form-select"
            @change="onChange1($event)"
            v-if="dropdown2data.length !== 0"
          >
            <option v-for="(cat, i) of dropdown2data" :value="cat.id" :key="i">
              {{ cat.name }}
            </option>
          </select>
          <select
            class="form-select"
            @change="onChange2($event)"
            v-if="dropdown3data.length !== 0"
          >
            <option v-for="(cat, i) of dropdown3data" :value="cat.id" :key="i">
              {{ cat.name }}
            </option>
          </select>
          <button class="btn btn-primary" style="margin-top: 2rem">
            Create Post
          </button>
        </div>
      </div>
    </div>

    <div class="bottomnav" v-if="!addpost && !createpost">
      <div class="user1">
        <input type="text" />
      </div>
      <button class="btn btn-success" @click="$store.commit('addpostm')">
        Add Post
      </button>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";

import gql from "graphql-tag";
import moment from "moment";
@Options({
  data() {
    return {
      onebytwo: false,
      groupposts: [],
      group: [],
      postdata: [],
      groupusers: [],
      guser: [],
      groupname: this.$store.state.groupName || "",
      groupdescription: "",
      groupedit: false,
      nameedit: false,
      descriptionedit: false,
      showpost: false,
      postId: "",
      parentId: "",
      findByParentId: [],
      dropnumber: 1,
      dropdown: "0",
      dropdown1data: [],
      dropdown2data: [],
      dropdown3data: [],
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },

  created: function () {
    this.moment = moment;
  },
  methods: {
    onChange(value) {
      this.dropdown2data = [];
      this.dropdown3data = [];
      this.dropdown = value.target.value;
      console.log(value.target.value, "_");
    },
    onChange1(value) {
      this.dropdown3data = [];
      this.dropdown = value.target.value;
      console.log(value.target.value, "_");
    },
    onChange2(value) {
      this.dropdown = value.target.value;
      console.log(value.target.value, "_");
    },
    edit1() {
      this.descriptionedit = !this.descriptionedit;
    },
    edit2() {
      this.nameedit = !this.nameedit;
    },
    open1() {
      this.groupedit = !this.groupedit;
    },
    onebytwoF() {
      this.onebytwo = !this.onebytwo;
    },
    onebytwoG() {
      this.onebytwo = false;
    },
    postdeatils(postId) {
      this.showpost = !this.showpost;
      this.postId = postId;
    },
    async deletegroup() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($removeGroupId: String!) {
              removeGroup(id: $removeGroupId) {
                __typename
              }
            }
          `,
          variables: {
            removeGroupId: this.id,
          },
        })
        .then(() => {
          this.$store.commit("dgroup");
          this.$router.push("/home");
        })
        .catch((e) => console.log(e));
    },
    async updateName() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($updateGroupInput: UpdateGroupInput!) {
              updateGroup(updateGroupInput: $updateGroupInput) {
                __typename
              }
            }
          `,
          variables: {
            updateGroupInput: {
              id: this.id,
              name: this.groupname,
            },
          },
        })
        .then(() => {
          this.$store.commit("updateg");
        })
        .catch((e) => console.log(e));
    },
    async exitGroup() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($deleteGroupUser: DeleteGroupUserInput!) {
              deleteGroupUser(deleteGroupUser: $deleteGroupUser) {
                __typename
              }
            }
          `,
          variables: {
            deleteGroupUser: {
              groupId: this.id,
              userId: this.userId,
            },
          },
        })
        .then(() => {
          this.$store.commit("updateg");
          this.$router.push("/home");
        })
        .catch((e) => console.log(e));
    },
    async updateDescription() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ($updateGroupInput: UpdateGroupInput!) {
              updateGroup(updateGroupInput: $updateGroupInput) {
                __typename
              }
            }
          `,
          variables: {
            updateGroupInput: {
              id: this.id,
              description: this.groupdescription,
            },
          },
        })
        .then(() => {
          this.$store.commit("updateg");
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    id: function () {
      return this.$route.params.id;
    },
    userId: function () {
      return localStorage.getItem("userId");
    },
    addpost: function () {
      return this.$store.state.addpost;
    },
    createpost: function () {
      return this.$store.state.createpost;
    },
    dropdownnumber: function () {
      if (this.dropdown1data.length === 0) {
        return 1;
      }
      if (this.dropdown1data.length !== 0 && this.dropdown2data.length === 0) {
        return 2;
      }
      if (
        this.dropdown1data.length !== 0 &&
        this.dropdown2data.length !== 0 &&
        this.dropdown3data.length === 0
      ) {
        return 3;
      }
    },
  },
  apollo: {
    findByParentId: {
      query: gql`
        query ($parentid: String!) {
          findByParentId(parentid: $parentid) {
            name
            id
          }
        }
      `,
      variables() {
        return {
          parentid: this.dropdown,
        };
      },
      update(data) {
        if (this.dropdown1data.length == 0) {
          console.log("dropdown1");
          return (this.dropdown1data = data.findByParentId);
        }
        if (
          this.dropdown1data.length !== 0 &&
          this.dropdown2data.length === 0
        ) {
          console.log("dropdown2");

          return (this.dropdown2data = data.findByParentId);
        }
        if (
          this.dropdown1data.length !== 0 &&
          this.dropdown2data.length !== 0 &&
          this.dropdown3data.length === 0
        ) {
          console.log("dropdown3");

          return (this.dropdown3data = data.findByParentId);
        }
      },
    },
    groupposts: {
      query: gql`
        query ($groupId: String!) {
          groupposts(groupId: $groupId) {
            id
            postTitle
            isBuy
            description
            type
            createdAt
            postattribute {
              attributeValue
              attribute {
                name
              }
            }
            user {
              id
              username
            }
            category {
              name
              parent {
                name
                parent {
                  name
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          groupId: this.id,
        };
      },
      update(data) {
        this.postdata = data.groupposts;
        console.log(data.groupposts, "dd");
      },
    },
    group: {
      query: gql`
        query Group($groupId: String!) {
          group(id: $groupId) {
            name
            groupusers {
              isAdmin
              user {
                username
                id
              }
            }
          }
        }
      `,
      variables() {
        return {
          groupId: this.id,
        };
      },
      update(data) {
        this.groupname = data.group.name;
        this.groupdescription = data.group.description;
        this.guser = data.group.groupusers;
        data.group.groupusers.map((val) => {
          if (val.user.id == this.userId) {
            this.groupusers.push("You");
          } else {
            this.groupusers.push(val.user.username);
          }
        });
        //console.log(data.group.groupusers, "dd");
      },
    },
  },
  mounted() {
    console.log(this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      this.groupusers = [];
      this.$apollo.queries.groupposts.refetch();
      this.$apollo.queries.group.refetch();
    },
    dropdown(newValue) {
      this.$apollo.queries.findByParentId.refetch();
      console.log(newValue, "_");
    },
  },
})
export default class Main extends Vue {}
</script>

<style>
.lll {
  width: 31vw;
  margin-left: 10rem;
  margin-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.kkk {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem 2rem;
  width: 30vw;
}
.kkk select {
  margin-top: 2rem;
}
.nn {
  width: 10rem;
  height: 6rem;
  margin-top: 1rem;
  display: flex;
}
.admin {
  color: #128c7e;
  border: 1px solid #128c7e;
  font-size: 0.7rem;
  margin-left: 10rem;
  padding: 0.05rem 0.2rem;
}
.king {
  display: flex;
}
.kk {
  margin-top: 0.6rem;
  background: white;
}
.groupus {
  display: flex;
  padding: 0.6rem;
  border-top: 1px solid rgb(240, 233, 233);
  border-bottom: 1px solid rgb(240, 233, 233);
}
.groupus:hover {
  cursor: pointer;
  background: rgb(243, 241, 241);
}
.groupuse {
  margin-left: 2rem;
  display: flex;
  align-items: center;
}
.groupus img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.groupdes {
  margin-top: 0.4rem;
  background: white;
}
.c {
  display: flex;
}
.groupimg {
  background: white;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.groupimg img {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin-top: 0.3rem;
}
.infog {
  display: flex;
  flex-direction: column;

  width: 25rem;
  margin-top: 3.5rem;
  margin-bottom: 7rem;
  margin-left: 1rem;
  overflow-y: scroll;
  height: 33rem;
}
.posti {
  display: flex;
}

.att {
  display: flex;
  align-items: center;
}
.attname {
  margin-left: 1rem;
  margin-right: 1rem;
}
.attval {
  margin-left: 3rem;
}
.postdata {
  background: white;
  position: relative;
  margin-top: 6rem;
  margin-bottom: 7rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.icon:active,
.icon:focus {
  box-shadow: 0 0 5px 5px #666;
}
.groupedit {
  position: absolute;
  z-index: 200;
  width: 11vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  margin-right: 1rem;
  margin-top: 3rem;
}
.groupuser {
  display: inline;
}
.userd {
  margin-left: 1rem;
}
.postcontent,
.postimage {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}

.card1 {
  background: white;
  width: 20rem;
  height: 23rem;
  display: flex;
  flex-direction: column;

  margin-top: 1rem;
  border-top-right-radius: 0.7rem;
  border-top-left-radius: 0rem;
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;
}
.card2 {
  background: #dcf8c6;
  width: 20rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  margin-left: 37rem;
  margin-top: 1rem;
  border-top-right-radius: 0.7rem;
  border-top-left-radius: 0.7rem;
  border-bottom-right-radius: 0rem;
  border-bottom-left-radius: 0.7rem;
}
.card3 {
  background: #dcf8c6;
  width: 20rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  margin-left: 12rem;
  margin-top: 1rem;
  border-top-right-radius: 0.7rem;
  border-top-left-radius: 0.7rem;
  border-bottom-right-radius: 0rem;
  border-bottom-left-radius: 0.7rem;
}

.topnav {
  background: rgb(231, 239, 240);
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  height: 10vh;
  width: 70vw;
  z-index: 100;
}
.bottomnav {
  background: rgb(231, 239, 240);
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 70vw;
  height: 10vh;
  bottom: 0;
}
.user {
  display: flex;
}
.user1 {
  width: 40vw;
  padding: 0.5rem 2rem;
  background: white;
  border-radius: 2rem;
}
.user1 input {
  width: 35vw;
  outline: none;
  border: none;
}
.post {
  position: relative;
  margin-top: 3.5rem;
  margin-bottom: 7rem;
  margin-left: 1rem;
  overflow-y: scroll;
  height: 33rem;
}
</style>
