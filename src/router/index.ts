import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Education from "@/components/Education.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: { tab: 'experience' },
    },
    {
      path: '/education',
      name: 'education',
      component: HomeView,
      props: { tab: 'education' },
    },
    {
      path: '/experience',
      name: 'experience',
      component: HomeView,
      props: { tab: 'experience' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeView,
      props: { tab: 'projects' },
    },
    {
      path: '/:pathMatch(.*)*',
      component: HomeView,
      props: { tab: 'experience' },
    },
  ]
})

export default router
