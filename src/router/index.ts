import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }, {
            path: '/json',
            name: 'jsonShow',
            component: () => import('../views/JsonView.vue')
        },
        {
            path: '/content',
            name: 'contentChild',
            component: () => import('../views/ContentChildView.vue')
        },
        {
            path: '/accessChild',
            name: 'accessChild',
            component: () => import('../views/AccessChildView.vue')
        },
        {
            path: '/dc',
            name: 'dc',
            component: () => import('../views/DynamicComponent.vue')
        }
    ]
})

export default router
