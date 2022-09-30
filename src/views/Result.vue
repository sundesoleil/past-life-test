<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-layout class="align-center justify-center">
          <v-card class="mx-auto" max-width="300" shaped>
            <v-img :src="pastLifeTestResultImg" height="300px"></v-img>
            <div class="text-center py-4 mx-2">
              <h4>{{ userName }}님의 전생은 {{ pastLifeTestResult }}입니다.</h4>
            </div>
          </v-card>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import results from "@/assets/results.json";

export default {
  name: "Result",
  data() {
    return {
      pastLifeTestResults: results,
      pastLifeTestResult: "",
      pastLifeTestResultImg: "",
      userName: "",
    };
  },
  mounted() {
    this.getResult();
    this.userName = this.$route.params.name;
  },
  methods: {
    getResult() {
      let index = Math.floor(Math.random() * this.pastLifeTestResults.length);
      this.pastLifeTestResult = this.pastLifeTestResults[index].pastLife;
      this.pastLifeTestResultImg = this.pastLifeTestResults[index].pastImg;
    },
  },
};
</script>
