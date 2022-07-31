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
        component: () => import('docs/pages/docs/install.md')
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
        path: 'button',
        name: 'ComponentsButton',
        component: () => import('docs/pages/components/button.md')
      },
      {
        path: 'input',
        name: 'ComponentsInput',
        component: () => import('docs/pages/components/input.md')
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