import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/clients',
    name: 'Clients',
    component: () => import(/* webpackChunkName: "Clients" */ '../views/Clients/index.vue'),
    children: [
      {

        path: '/',
        name: 'Clients',
        component: () => import(/* webpackChunkName: "Clients" */ '../views/Clients/Clients.vue'),
      },
      {
        path: 'add-client',
        name: 'Client',
        component: () => import(/* webpackChunkName: "Client" */ '../views/Clients/Client.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
