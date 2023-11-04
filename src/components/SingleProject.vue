<template>
    <div class="container">
        <h1 class="title"> {{ project.title }}</h1>
        <ImageCarousel :projectTitle="project.title" />
        <div class="links">
            <a
            v-for="link in project.links"
            :key="link.name"
            :href="link.url"
            >
                {{ link.name }}
            </a>
        </div>
        
        <p class="description">
            {{ project.description }}
        </p>
        <v-chip-group>
            <v-chip
                v-for="tag in project.tags"
                :key="tag"
                color="primary"
                text-color="white"
            >
                {{ tag }}
            </v-chip>
        </v-chip-group>
    </div>
</template>

<script setup>
// import { defineProps } from 'vue'
import ImageCarousel from '@/components/ImageCarousel.vue'

// eslint-disable-next-line
const props = defineProps({
    project: Array,
});
console.log('---');
console.log(props.project);
console.log('---');
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
    text-align: center;
    /* position: fixed;
    width: 100%;
    height: 75%; */
}
div.links {
    display: inline;
    margin: 100px 10px 30px; /* top rl bottom; top right bottom left */
    color: white;
}
</style>