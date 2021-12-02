<template>
  <div class="cgroupp">
    <div class="top1">
      <i class="fas fa-arrow-left back" @click="$store.commit('cancel')"></i>
      <h4>{{ $store.state.grouptype }} Group</h4>
    </div>
    <div class="inputs">
      <label class="form-label" for="form3Example4">Group Name</label>

      <input
        type="text"
        class="inp form-control"
        v-model="name"
        id="form3Example4"
      />
      <button class="btn btn-primary buttonc" @click="createGroup()">
        Create Group
      </button>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      name: "",
      type: this.$store.state.grouptype,
    };
  },
  methods: {
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
              type: this.type,
            },
          },
        })
        .then(() => {
          this.$store.commit("cancel");
        })
        .catch((e) => console.log(e));
    },
  },
  mounted() {},
})
export default class CreateGroup extends Vue {}
</script>

<style>
.buttonc {
  width: 40%;
  margin-top: 1rem;
}
.inp {
  width: 80%;
}
.inputs {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}
</style>
