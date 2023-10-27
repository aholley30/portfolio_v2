<template>
    <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        height="300"
    >
        <template v-slot:prev="{ props }">
            <v-btn color="transparent" @click="props.onClick">
                <i class="mdi mdi-chevron-left"></i>
            </v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn color="transparent" @click="props.onClick">
                <i class="mdi mdi-chevron-right"></i>
            </v-btn>
        </template>
        <v-carousel-item
            v-for="file in files"
            :key="file"
            :src="sourceDirectory + file"
            cover
        ></v-carousel-item>
    </v-carousel>
</template>

<script setup>
import fs from 'fs';
import { ref } from 'vue';

defineProps({
    projectTitle: String,
});

let sourceDirectory = './src/assets/project-images/' + $props.projectTitle + '/';
const baseDirectory = './src/assets/project-images/';

const files = ref(fs.readdirSync(sourceDirectory + $props.projectTitle));
if (files.value.length === 0) {
    sourceDirectory = baseDirectory + 'default/';
    files.value = fs.readdirSync(sourceDirectory);
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 75%;
}
iframe {
    position: absolute;
    inset: 0px;
    margin: 155px auto;
}
a {
    display: block;
    margin-bottom: 10px;
    margin-top: 100px;
    color: white;
}
</style>