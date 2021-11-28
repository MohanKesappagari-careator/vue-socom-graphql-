<template>
  <div class="scroll1">
    <div class="top1">
      <i class="fas fa-arrow-left back" @click="$store.commit('profile')"></i>
      <h4>profile</h4>
    </div>
    <div class="profile">
      <img :src="image" alt="" class="profileimage" />
    </div>
    <div class="username">
      <p>Your name</p>

      <div class="name" v-if="!nameedit">
        <h6>{{ username }}</h6>
        <i class="fas fa-user-edit edit" @click="editname()"></i>
      </div>

      <div class="name" v-if="nameedit">
        <input type="text" v-model="username" class="input1" />
        <i class="fas fa-check check" @click="savename()"></i>
      </div>
    </div>

    <div class="intimation">
      <p>
        This username is visible to all people you are using this app which are
        using groups same as your using
      </p>
    </div>
    <div class="username">
      <p>Your Email</p>

      <div class="name" v-if="!emailedit">
        <h6>{{ email }}</h6>
        <i class="fas fa-user-edit edit" @click="editemail()"></i>
      </div>

      <div class="name" v-if="emailedit">
        <input type="text" v-model="email" class="input1" />
        <i class="fas fa-check check" @click="saveemail()"></i>
      </div>
    </div>
    <div class="username">
      <p>Your Phonenumber</p>

      <div class="name" v-if="!phonenumberedit">
        <h6>{{ phonenumber }}</h6>
        <i class="fas fa-user-edit edit" @click="editphonenumber()"></i>
      </div>

      <div class="name" v-if="phonenumberedit">
        <input type="text" v-model="phonenumber" class="input1" />
        <i class="fas fa-check check" @click="savephonenumber()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";
@Options({
  data() {
    return {
      user: {},
      username: "mohan",
      email: "m@gmail.com",
      phonenumber: "8",
      nameedit: false,
      emailedit: false,
      phonenumberedit: false,

      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  computed: {
    ...mapState(["currentuser"]),
    userId: function () {
      return localStorage.getItem("userId");
    },
  },
  apollo: {
    user: {
      query: gql`
        query ($userId: String!) {
          user(id: $userId) {
            username
            email
            address {
              phonenumber
            }
          }
        }
      `,
      variables() {
        return {
          userId: this.userId,
        };
      },
      update(data) {
        console.log(data.user, "data");
        this.username = data.user.username;
        this.email = data.user.email;
        this.phonenumber = data.user.address[0].phonenumber;
        return {};
      },
    },
  },

  async mounted() {
    console.log(this.user, "user");
  },
  methods: {
    editname() {
      console.log("click");
      this.nameedit = true;
    },
    savename() {
      this.nameedit = false;
    },
    editemail() {
      this.emailedit = true;
    },
    saveemail() {
      this.emailedit = false;
    },
    editphonenumber() {
      this.phonenumberedit = true;
    },
    savephonenumber() {
      this.phonenumberedit = false;
    },
    async userdata() {
      await this.user((val) => {
        this.name = val.name;
      });
    },
  },
})
export default class Profile extends Vue {}
</script>

<style>
.scroll1 {
  overflow: auto;
}
.intimation {
  background: rgb(230, 228, 228);
  color: rgb(75, 70, 70);
  padding: 1rem 2.3rem;
  font-size: 0.8rem;
}
.check {
  margin-right: 1rem;
}
.input1 {
  border: none;
  width: 100%;
  border-bottom: 2px solid rgb(31, 151, 105);
}
.input1:focus {
  border-bottom: 2px solid rgb(31, 151, 105);
  outline: none;
}
.edit,
.check {
  cursor: pointer;
}
.name {
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem;
}
.username p {
  color: rgb(31, 151, 105);
  font-size: 0.8rem;
  margin: 1rem 2rem;
}
.profile {
  display: flex;
  align-items: center;
  background: whitesmoke;
}
.profileimage {
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  margin: 2rem 6rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.top1 {
  display: flex;
  background: rgb(31, 151, 105);
  padding: 3rem 0rem 1rem 2rem;
  color: white;
  align-items: center;
}
.top1 h4 {
  margin-left: 2.4rem;
}
.back {
  cursor: pointer;
}
</style>
