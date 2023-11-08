<template>
        <v-layout>
            <v-app-bar color="black" prominent>
                <v-app-bar-nav-icon
                color="white"
                @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>{{ props.pageTitle }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-text-field
                        v-show="isShown"
                        ref="searchField"
                        v-model="search"
                        label="Search"
                        single-line
                        variant="underlined"
                        @update:model-value="val => filterStore.setSearchTerm(val)"
                    >
                    </v-text-field>
                </v-slide-x-reverse-transition>
                <v-btn
                    v-show="isProjects"
                    variant="text" 
                    icon="mdi-magnify"
                    @click="isShown = !isShown">
                </v-btn>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" temporary>
                <v-list>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="item.to"
                    :item="item.title"
                    >
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-layout>
</template>

<script setup>
import { ref, watch, defineProps, computed } from 'vue';
import router from '@/router'
import { useFilterStore } from '@/stores/filterStore'

const items = router.options.routes
    .map(route => ({
        title: route.name,
        to: {name: route.name},
}));

const filterStore = useFilterStore();

const props = defineProps({
  pageTitle: String,
});

const drawer = ref(false);
const group = ref(null);
const isShown = ref(false);
const search = ref('');
const isProjects = computed(() => props.pageTitle === 'Projects');

watch(group, () => {
  drawer.value = false;
});

</script>
<style scoped>
* {
    color: white;
}

:deep(nav) {
    background: #131414;
    color: white;
}

:deep(.v-navigation-drawer__content) {
    color: white;
}
.filter-options {
    display:block;
}
</style>