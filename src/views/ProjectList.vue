<template>
    <div class="container">
        <v-expansion-panels>
            <v-expansion-panel
                v-for="project in projects"
                :key="project.title"
            >
                <v-expansion-panel-title>
                    {{ project.title }}
                    <br>
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
                </v-expansion-panel-title>
            <SingleProject :project="project" />
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script setup>
import projects from '@/assets/data/projects.json'
import SingleProject from '@/components/SingleProject.vue'


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
div.links {
    display: inline;
    margin: 100px 10px 30px; /* top rl bottom; top right bottom left */
    color: white;
}
</style>