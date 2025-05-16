import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import ContactoView from '../views/ContactoView.vue'
import ClientesView from '../views/ClientesView.vue'

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
      component: AboutView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
  ]
})

export default router