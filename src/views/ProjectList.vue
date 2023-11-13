<template>
    <div class="container">
        <div
            v-for="project in selections"
            :key="project.title"
            class="row expansion-item"
        >
            <div
                class="row header text-center"
                @click="showHideProject"
            >
                <div class="row title">
                    <div class="p-name col">
                        {{ project.title }}
                    </div>
                </div>
                <div class="row tags">
                    <div class="col">
                        <v-chip-group>
                            <v-chip
                                v-for="tag in project.tags"
                                :key="tag"
                                :class="project.title"
                                class="tag"
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
import { watch, computed, ref } from 'vue';
import projects from '@/assets/data/projects.json'
import SingleProject from '@/components/SingleProject.vue'
import { useFilterStore } from '@/stores/filterStore';

const selected = ref(projects.projects);
const filterStore = useFilterStore();
const selections = ref(computed(() => [...selected.value]));

const showHideProject = (event) => {
    const project = event.currentTarget.parentNode.querySelector('div.project');
    const titleText = event.currentTarget.querySelector('div.header .title');
    project.classList.toggle('hidden');
    titleText.classList.toggle('expanded');
    // TODO: add animation
}

const filterProjectTitles = (searchTerm) => {
    if (searchTerm) {
        selected.value = projects.projects.filter(
            project => project.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    } else {
        selected.value = projects.projects;
    }
};

watch(
    () => filterStore.$state.searchTerm,
    () => {
      filterProjectTitles(filterStore.searchTerm);
    },
  )
    
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
div.p-name {
    padding-left: 24px;
}
div.row.title {
    font-size: initial;
    transition: font-size 0.5s ease .2s;
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