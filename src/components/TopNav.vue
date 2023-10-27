<template>
    <v-card>
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
            
            <v-app-bar color="black" prominent>
                <v-app-bar-nav-icon
                color="white"
                @click.stop="drawer = !drawer"
                ></v-app-bar-nav-icon>
                
                <v-toolbar-title>{{ pageTitle }}</v-toolbar-title>
                
                <v-spacer></v-spacer>
                
                <v-btn variant="text" icon="mdi-magnify"></v-btn>
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
</v-card>
</template>

<script>
import router from '@/router'

const items = router.options.routes
.map(route => ({
    title: route.name,
    to: {name: route.name},
}));
export default {
    data: () => ({
        drawer: false,
        group: null,
        items,
        pageTitle: router.currentRoute.value.name,
    }),
    
    watch: {
        group() {
            this.drawer = false
        },
    },
}
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
</style>