<template>
    <div class="container">
        <div class="row expansion-item"
            v-for="project in projects['projects']"
            :key="project.title"
            
        >
            <div
                class="row header text-center"
                @click="showHideProject"
            >
                <div class="row title">
                    <div class="col">
                        {{ project.title }}
                    </div>
                </div>
                <div class="row tags">
                    <div class="col">
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
                </div>
            </div>
            <div class="row project hidden">
                <SingleProject :project="project" />
            </div>
        </div>
    </div>
</template>

<script setup>
import projects from '@/assets/data/projects.json'
import SingleProject from '@/components/SingleProject.vue'

const showHideProject = (event) => {
    const project = event.currentTarget.parentNode.querySelector('div.project');
    const titleText = event.currentTarget.querySelector('div.header .title');
    project.classList.toggle('hidden');
    titleText.classList.toggle('expanded');
    // TODO: add animation
}
    
</script>

<style scoped>
div.container {
    text-align: center;
    width: 100%;
    height: 75%;
    margin-top: 80px;
}
div.row.expansion-item {
    color: white;
}
div.row.header:hover {
    cursor: pointer;
}
div.row.title {
    font-size: initial;
    transition: font-size 1s ease .2s;
}
div.row.title.expanded {
    font-size: x-large;
}
div.row.project {
    display: block;
    margin-top: -60px;
}
div.row.project.hidden {
    display: none;
}

div.row.tags {
    margin: auto;
    padding-bottom: 20px;
}
:deep(.v-chip-group) {
    justify-content: center;
}
div.links {
    display: inline;
    margin: 100px 10px 30px; /* top rl bottom; top right bottom left */
    color: white;
}
</style>