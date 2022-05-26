import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const isLoggedIn = () => !!localStorage.getItem('auth');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { unAuthOnly: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
    meta: { unAuthOnly: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/RegisterView.vue'),
    meta: { unAuthOnly: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardView.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/store',
    name: 'store',
    component: () => import(/* webpackChunkName: "store" */ '@/views/StoreView.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/store/:id',
    name: 'order',
    component: () => import(/* webpackChunkName: "order" */ '@/views/OrderView.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/dish',
    name: 'add_dish',
    component: () => import(/* webpackChunkName: "order" */ '@/views/AddDish.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '@/views/CheckOut.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/finalize',
    name: 'mainStore',
    component: () => import(/* webpackChunkName: "mainStore" */ '@/views/MainStore.vue'),
    meta: { authOnly: true }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "mainStore" */ '@/views/ContactView.vue'),
    meta: { unAuthOnly: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
    else {
      next();
    }
  }
  else if (to.matched.some(record => record.meta.unAuthOnly)) {
    if (isLoggedIn()) {
      next({
        path: '/dashboard',
        query: { redirect: to.fullPath }
      });
    }
    else {
      next();
    }
  }
  else {
    next();
  }
});

export default router;
