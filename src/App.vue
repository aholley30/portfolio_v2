<template>
  <TopNav
    v-if="showNavbar"
    :pageTitle="pageTitle"/>
  <RouterView />
</template>

<script>
import router from '@/router'
import { RouterView } from 'vue-router';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'App',
  data: () => ({
    showNavbar: router.currentRoute.value.name !== 'Home',
    pageTitle: router.currentRoute.value.name,
  }),
  components: {
    RouterView,
    TopNav,
  },
  watch: {
    $route (to) {
      this.showNavbar = to.name !== 'Home';
      this.pageTitle = to.name;
    },
  },
}
</script>

<style>
* {
  font-family: 'Courier New', Courier, monospace;
}
html, body {
  background-color: black !important;
}
</style>
