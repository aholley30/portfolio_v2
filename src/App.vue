<template>
  <HelloWorld data-ripple="rgba(255,0,0, 0.3)" msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
* {
  background-color: black;
}
</style>
