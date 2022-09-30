<template>
  <v-app>
    <v-main>
      <Header />
      <div>
        <transition name="fade-slide-up" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);

.jejugothic * {
  font-family: "Jeju Gothic", sans-serif;
}

* {
  font-family: "Jeju Gothic";
}
.fade-slide-up-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-up-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-up-enter,
.fade-slide-up-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>
