<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-card class="mx-auto" max-width="300">
            <v-img
              src="https://cdn.pixabay.com/photo/2015/07/25/07/30/time-machine-859335_1280.jpg"
              height="300px"
            ></v-img>
            <v-card-title> 당신의 전생은? </v-card-title>
            <v-card-subtitle>
              시간 여행을 떠나기 위해 이름을 입력해주세요
            </v-card-subtitle>
            <v-text-field
              :autofocus="true"
              label="제 이름은요,,"
              class="mx-4 mt-0 mb-4"
              v-model="userName"
              @keyup.enter="goResult"
            >
            </v-text-field>
          </v-card>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userName: "",
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  methods: {
    goResult() {
      if (this.userName) {
        this.$router.push({
          name: "Result",
          params: { name: this.userName },
        });
      } else {
        this.$swal("이름을 입력해주세요");
      }
    },
  },
};
</script>
