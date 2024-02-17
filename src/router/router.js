import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/actualizar',
        component: () => import('@/pages/EstudianteGuardar.vue')
    }, {
        path: '/consultar',
        component: () => import('@/pages/EstudianteConsultar.vue')
    }, {
        path: '/eliminar',
        component: () => import('@/pages/EstudianteEliminar.vue')
    }, {
        path: '/grabar',
        component: () => import('@/pages/EstudianteGuardar.vue')
    }, {
        path: '/:pahMatch(.*)*',
        component: () => import('@/pages/NoFoundPage.vue')
    }


]
const router = createRouter({ history: createWebHashHistory(), routes })
export default router