<template>
    <TopNav
        v-if="showNavbar"
        :page-title="pageTitle"
    />
    <RouterView />
</template>

<script>
import router from '@/router'
import { RouterView } from 'vue-router';
import TopNav from '@/components/TopNav.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    TopNav,
  },
  data: () => ({
    showNavbar: router.currentRoute.value.name !== 'Home',
    pageTitle: router.currentRoute.value.name,
  }),
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
