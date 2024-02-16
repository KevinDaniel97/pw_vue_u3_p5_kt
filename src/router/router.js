import { createRouter, createWebHashHistory } from 'vue-router'

import EstudianteActualizar from '../pages/EstudianteActualizar'
import EstudianteGuardar from '../pages/EstudianteGuardar.vue'
import EstudianteConsultar from '@/pages/EstudianteConsultar.vue'
import EstudianteEliminar from '@/pages/EstudianteEliminar.vue'

const routes = [
    {
        path: '/actualizar',
        component: EstudianteActualizar
    }, {
        path: '/consultar',
        component: EstudianteConsultar
    }, {
        path: '/eliminar',
        component: EstudianteEliminar
    }, {
        path: '/grabar',
        component: EstudianteGuardar
    }

]
const router = createRouter({ history: createWebHashHistory(), routes })
export default router