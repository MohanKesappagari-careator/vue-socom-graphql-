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

      <div class="name" v-if="!edit">
        <h6>{{ name }}</h6>
        <i class="fas fa-user-edit edit" @click="editclick()"></i>
      </div>

      <div class="name" v-if="edit">
        <input type="text" v-model="name" class="input1" />
        <i class="fas fa-check check" @click="save()"></i>
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

      <div class="name" v-if="!edit">
        <h6>{{ email }}</h6>
        <i class="fas fa-user-edit edit" @click="editclick()"></i>
      </div>

      <div class="name" v-if="edit">
        <input type="text" v-model="email" class="input1" />
        <i class="fas fa-check check" @click="save()"></i>
      </div>
    </div>
    <div class="username">
      <p>Your Phonenumber</p>

      <div class="name" v-if="!edit">
        <h6>{{ phone }}</h6>
        <i class="fas fa-user-edit edit" @click="editclick()"></i>
      </div>

      <div class="name" v-if="edit">
        <input type="text" v-model="phone" class="input1" />
        <i class="fas fa-check check" @click="save()"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      edit: false,
      name: "K Mohan",
      email: "mohan@gmail.com",
      phone: "8074769539",
      image:
        "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    };
  },
  methods: {
    editclick() {
      this.edit = true;
    },
    save() {
      this.edit = false;
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
