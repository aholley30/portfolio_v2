<template>
    <v-carousel
        show-arrows="hover"
        hide-delimiter-background
        height="300"
    >
        <template #prev="{ prevProps }">
            <v-btn
                color="transparent"
                @click="prevProps.onClick"
            >
                <i class="mdi mdi-chevron-left" />
            </v-btn>
        </template>
        <template #next="{ nextProps }">
            <v-btn
                color="transparent"
                @click="nextProps.onClick"
            >
                <i class="mdi mdi-chevron-right" />
            </v-btn>
        </template>
        <v-carousel-item
            v-for="file in files"
            :key="file"
            :src="sourceDirectory + file"
            cover
        />
    </v-carousel>
</template>

<script setup>
import { ref } from 'vue';

// eslint-disable-next-line
const props = defineProps({
    projectTitle: {
        type: String,
        required: true
    },
});

const files = ref([]);

// eslint-disable-next-line
const imageLF = IMAGE_LF;
const baseDirectory = './project-images/';
const sourceDirectory = ref('');
const spacelessName = props.projectTitle.replace( /\s/g, '');

if (Object.prototype.hasOwnProperty.call(imageLF, spacelessName)) {
    files.value = imageLF[spacelessName];
    sourceDirectory.value = baseDirectory + spacelessName + '/';
} else {
    files.value = imageLF['default'];
    sourceDirectory.value = baseDirectory + 'default/';
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>