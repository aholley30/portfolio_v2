import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue'
import PdfViewer from '@/components/PdfView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HelloWorld,
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
