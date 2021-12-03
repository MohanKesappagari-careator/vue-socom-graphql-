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
            {{ groupusers.toString() }},
          </p>
        </div>
      </div>
      <div class="icon" @click="open1()" style="cursor: pointer">
        <i class="fas fa-ellipsis-v fa-lg"></i>
      </div>
    </div>
    <div class="card groupedit" v-if="groupedit">
      <div class="p" style="margin-top: 0.4rem">
        <p>Group Info</p>
      </div>
      <div class="p">
        <p>Update</p>
      </div>
      <div class="p" @click="deletegroup()">
        <p>Delete</p>
      </div>
    </div>

    <div class="post" v-if="onebytwo">
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
              <i class="fas fa-angle-double-right"></i> {{ post.category.name }}
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
    <div class="post" v-if="!onebytwo">
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
    <div class="bottomnav">
      <div class="user1">
        <input type="text" />
      </div>
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
      groupname: this.$store.state.groupName || "",
      groupedit: false,
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },

  created: function () {
    this.moment = moment;
  },
  methods: {
    open1() {
      this.groupedit = !this.groupedit;
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
  },
  computed: {
    id: function () {
      return this.$route.params.id;
    },
    userId: function () {
      return localStorage.getItem("userId");
    },
  },
  apollo: {
    groupposts: {
      query: gql`
        query ($groupId: String!) {
          groupposts(groupId: $groupId) {
            postTitle
            isBuy
            description
            type
            createdAt
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
              user {
                username
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
        data.group.groupusers.map((val) => {
          this.groupusers.push(val.user.username);
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
  },
})
export default class Main extends Vue {}
</script>

<style>
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
  margin-top: -4rem;
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
  margin-left: 2rem;
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
  justify-content: space-between;
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
  width: 55vw;
  padding: 0.5rem 2rem;
  background: white;
  border-radius: 2rem;
  margin-left: 2rem;
}
.user1 input {
  width: 50vw;
  outline: none;
  border: none;
}
.post {
  position: relative;
  margin-top: 6rem;
  margin-bottom: 7rem;
  margin-left: 1rem;
}
</style>
