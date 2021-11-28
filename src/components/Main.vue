<template>
  <div class="m">
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

    <div class="post">
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          exercitationem excepturi aspernatur obcaecati illo eaque,
          reprehenderit totam maxime esse error delectus earum repudiandae quia
          nulla nobis nam consectetur ex temporibus omnis dolor perspiciatis ab
          architecto veritatis. Eos enim aut eligendi fugiat quisquam? Numquam,
          doloremque ut. Tempora assumenda quam, dignissimos consequatur totam
          aspernatur provident corrupti inventore expedita, ipsam qui at nemo
          debitis temporibus. Beatae animi asperiores quidem id minus,
          voluptates quia, saepe inventore rerum quae dicta iure exercitationem
          obcaecati ratione odio? Autem tenetur unde suscipit delectus. Quas
          natus porro, quos sed obcaecati officia error. Exercitationem quo quis
          laboriosam quos ducimus!
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          exercitationem excepturi aspernatur obcaecati illo eaque,
          reprehenderit totam maxime esse error delectus earum repudiandae quia
          nulla nobis nam consectetur ex temporibus omnis dolor perspiciatis ab
          architecto veritatis. Eos enim aut eligendi fugiat quisquam? Numquam,
          doloremque ut. Tempora assumenda quam, dignissimos consequatur totam
          aspernatur provident corrupti inventore expedita, ipsam qui at nemo
          debitis temporibus. Beatae animi asperiores quidem id minus,
          voluptates quia, saepe inventore rerum quae dicta iure exercitationem
          obcaecati ratione odio? Autem tenetur unde suscipit delectus. Quas
          natus porro, quos sed obcaecati officia error. Exercitationem quo quis
          laboriosam quos ducimus!
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          exercitationem excepturi aspernatur obcaecati illo eaque,
          reprehenderit totam maxime esse error delectus earum repudiandae quia
          nulla nobis nam consectetur ex temporibus omnis dolor perspiciatis ab
          architecto veritatis. Eos enim aut eligendi fugiat quisquam? Numquam,
          doloremque ut. Tempora assumenda quam, dignissimos consequatur totam
          aspernatur provident corrupti inventore expedita, ipsam qui at nemo
          debitis temporibus. Beatae animi asperiores quidem id minus,
          voluptates quia, saepe inventore rerum quae dicta iure exercitationem
          obcaecati ratione odio? Autem tenetur unde suscipit delectus. Quas
          natus porro, quos sed obcaecati officia error. Exercitationem quo quis
          laboriosam quos ducimus!
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          exercitationem excepturi aspernatur obcaecati illo eaque,
          reprehenderit totam maxime esse error delectus earum repudiandae quia
          nulla nobis nam consectetur ex temporibus omnis dolor perspiciatis ab
          architecto veritatis. Eos enim aut eligendi fugiat quisquam? Numquam,
          doloremque ut. Tempora assumenda quam, dignissimos consequatur totam
          aspernatur provident corrupti inventore expedita, ipsam qui at nemo
          debitis temporibus. Beatae animi asperiores quidem id minus,
          voluptates quia, saepe inventore rerum quae dicta iure exercitationem
          obcaecati ratione odio? Autem tenetur unde suscipit delectus. Quas
          natus porro, quos sed obcaecati officia error. Exercitationem quo quis
          laboriosam quos ducimus!
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          exercitationem excepturi aspernatur obcaecati illo eaque,
          reprehenderit totam maxime esse error delectus earum repudiandae quia
          nulla nobis nam consectetur ex temporibus omnis dolor perspiciatis ab
          architecto veritatis. Eos enim aut eligendi fugiat quisquam? Numquam,
          doloremque ut. Tempora assumenda quam, dignissimos consequatur totam
          aspernatur provident corrupti inventore expedita, ipsam qui at nemo
          debitis temporibus. Beatae animi asperiores quidem id minus,
          voluptates quia, saepe inventore rerum quae dicta iure exercitationem
          obcaecati ratione odio? Autem tenetur unde suscipit delectus. Quas
          natus porro, quos sed obcaecati officia error. Exercitationem quo quis
          laboriosam quos ducimus!
        </p>
      </div>
      <div class="card">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi
          exercitationem excepturi aspernatur obcaecati illo eaque,
          reprehenderit totam maxime esse error delectus earum repudiandae quia
          nulla nobis nam consectetur ex temporibus omnis dolor perspiciatis ab
          architecto veritatis. Eos enim aut eligendi fugiat quisquam? Numquam,
          doloremque ut. Tempora assumenda quam, dignissimos consequatur totam
          aspernatur provident corrupti inventore expedita, ipsam qui at nemo
          debitis temporibus. Beatae animi asperiores quidem id minus,
          voluptates quia, saepe inventore rerum quae dicta iure exercitationem
          obcaecati ratione odio? Autem tenetur unde suscipit delectus. Quas
          natus porro, quos sed obcaecati officia error. Exercitationem quo quis
          laboriosam quos ducimus!
        </p>
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
import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

@Options({
  setup() {
    const { result } = useQuery(
      gql`
        query ($groupId: String!) {
          groupposts(groupId: $groupId) {
            postTitle
            isBuy
            description
            type
            createdAt
          }
        }
      `,
      () => ({
        groupId: this.$store.state.groupId,
      })
    );
    watch(() => {
      console.log(result.value, "??");
    });
  },
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
  margin-top: 5rem;
  margin-bottom: 4rem;
}
</style>
