<template>
  <TopNav v-if="showNavbar"/>
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
  }),
  components: {
    RouterView,
    TopNav,
  },
  watch: {
    $route (to) {
      this.showNavbar = to.name !== 'Home';
    },
  },
}
</script>

<style>
html {
  background-color: black;
  font-family: 'Courier New', Courier, monospace;
}
</style>
