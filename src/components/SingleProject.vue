<template>
    <div class="container project">
        <ImageCarousel :project-title="project.title" />
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
        <hr>
    </div>
</template>

<script setup>
// import { defineProps } from 'vue'
import ImageCarousel from '@/components/ImageCarousel.vue'

// eslint-disable-next-line
const props = defineProps({
    project: {
      type: Object,
      required: true
    },
});
</script>

<style scoped>
div.container.project {
    text-align: center;
    display: hidden;
}
div.links {
    padding-top: 10px;
    padding-bottom: 15px;
}
div.links a {
    display: inline;
    margin: 100px 10px 30px; /* top rl bottom; top right bottom left */
    color: white;
}
hr {
    color: white;
}
</style>