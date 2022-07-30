import Vue from 'vue'
import VueRouter, { type RouteConfig } from 'vue-router';
import Layout from 'docs/layout/index.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    // redirect: '',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('docs/pages/home.vue')
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Layout,
    redirect: '/docs/install',
    children: [
      {
        path: 'install',
        name: 'DocsInstall',
        component: () => import('docs/pages/docs/install.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    redirect: '/components/hello-world',
    children: [
      {
        path: 'hello-world',
        name: 'ComponentsHelloWorld',
        component: () => import('docs/pages/components/hello-world.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ 'docs/pages/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})

export default router