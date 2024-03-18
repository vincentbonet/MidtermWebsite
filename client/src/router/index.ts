import { createRouter, createWebHistory } from 'vue-router';
import home from '../pages/home.vue';
import admin from '../pages/admin.vue';
import friendsactivity from '../pages/friendsactivity.vue';
import myactivity from '../pages/myactivity.vue';
import statistics from '../pages/statistics.vue';
import peoplesearch from '../pages/peoplesearch.vue';
import signup from '../pages/signup.vue';
import login from '../pages/login.vue';
import noti from '../pages/noti.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/friendsactivity',
    name: 'friendsactivity',
    component: friendsactivity
  },
  {
    path: '/myactivity',
    name: 'myactivity',
    component: myactivity
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: statistics
  },
  {
    path: '/peoplesearch',
    name: 'peoplesearch',
    component: peoplesearch
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/noti',
    name: 'noti',
    component: noti
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


