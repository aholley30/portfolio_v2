<template>
    <div class="text-center">
        <v-menu
            id="menu"
            v-model="menu"
            location="left"
            :close-on-content-click="false"
        >
            <template #activator="{ props }">
                <v-btn
                    variant="text"
                    icon="mdi-tune"
                    v-bind="props"
                />
            </template>
            <v-card
                min-width="300"
                max-width="400"
                class="actual-menu"
            >
                <v-list>
                    <div
                        v-for="tagGroups in tags"
                        :key="tagGroups.title"
                    >
                        <h6 class="tag-group-title">
                            {{ tagGroups.title }}
                        </h6>
                        <v-chip-group
                            filter
                            column
                            :multiple="tagGroups.multiple"
                            selected-class="text-primary"
                            class="justify-center"
                        >
                            <v-chip
                                v-for="(item, index) in tagGroups.list"
                                :key="index"
                            >
                                {{ item }}
                            </v-chip>
                        </v-chip-group>
                    </div>
                </v-list>
                <v-list class="text-center mb-4 mt-6">
                    <v-spacer />
                    <v-btn
                        color="#0c0c0c"
                        elevated
                        elevation="4"
                        class="mr-6"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="rgb(62,55,85)"
                        elevated
                        elevation="4"
                        @click="menu = false"
                    >
                        Save
                    </v-btn>
                </v-list>
            </v-card>
        </v-menu>
    </div>
</template>
<script>

const tags = [
  {
    title: 'Languages',
    multiple: true,
    list: ['C++', 'PHP', 'Java', 'Javascript', 'Python', 'Assembly', 'Matlab', 'HTML', 'CSS']
  },
  {
    title: 'Frameworks/Libraries',
    multiple: true,
    list: ['Vue 3', 'Twig', 'Scipy', 'Matplotlib', 'Symfony', 'OpenGL']
  },
  {
    title: 'IDEs',
    multiple: false,
    list: ['Visual Studio', 'Clion', 'IntelliJ']
  },
  {
    title: 'Primary Motivation',
    multiple: false,
    list: ['Personal Development', 'School']
  },
  {
    title: 'Environment',
    multiple: false,
    list: ['Linux', 'Mac OS', 'Windows']
  }
];
export default {
    data: () => ({
        menu: false,
        hints: true,
        tags,
    }),
}
</script>
<style scoped>
.actual-menu {
  color:whitesmoke;
  background-color: rgb(46, 44, 44);
}
.tag-group-title {
    text-align: center;
    margin-top: 15px;
}
</style>
