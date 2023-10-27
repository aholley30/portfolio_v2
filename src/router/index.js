import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import PdfViewer from '@/views/PdfView.vue';
import ProjectList from '@/views/ProjectList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                hideNavbar: true,
            }
        },
        {
            path: '/view-pdf',
            name: 'Activity',
            component: PdfViewer,
            meta: {
                hideNavbar: false,
            }
        },
        {
            path: '/projects',
            name: 'Projects',
            component: ProjectList,
            meta: {
                hideNavbar: false,
            }
        }
    ],
});

/* eslint-disable consistent-return */
// router.beforeEach((to) => {
//     const userStore = useUserStore();
//     if (to.name !== 'authentication' && !userStore.isAuthenticated()) {
//         return { name: 'authentication' };
//     }
// });

export default router;
