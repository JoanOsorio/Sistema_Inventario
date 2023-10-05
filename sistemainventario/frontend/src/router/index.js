import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListadoHerramientas from '../components/Herramientas/ListadoHerramientas.vue'
import EditarHerramientas from '../components/Herramientas/EditarHerramientas.vue'
import EliminarHerramientas from '../components/Herramientas/EliminarHerramientas.vue'
import CrearHerramientas from '../components/Herramientas/CrearHerramientas.vue'
import Login from '../components/Login.vue'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Herramientas',
      name: 'Herramientas',
      component: ListadoHerramientas
    },
    {
      path: '/Herramientas/:herramientaId/edit',
      name: 'EditarHerramientas',
      component: EditarHerramientas
    },
    {
      path: '/Herramientas/:herramientaId/delete',
      name: 'EliminarHerramientas',
      component: EliminarHerramientas
    },
    {
      path: '/Herramientas/created',
      name: 'CrearHerramientas',
      component: CrearHerramientas
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    } 
  ]
})

export default router

