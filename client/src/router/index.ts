import { refSession } from '@/viewModel/session'
import { createRouter, createWebHistory } from 'vue-router'
import admin from '../pages/admin.vue';
import home from '../pages/home.vue';
import login from '../pages/login.vue';
import findBuddies from '../pages/findbuddies.vue';
import friendsActivity from '../pages/friendsactivity.vue';
import noti from '../pages/noti.vue';
import signup from '../pages/signup.vue';
import statistics from '../pages/statistics.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: admin
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  },
  {
    path: '/findbuddies',
    name: 'Find Buddies',
    component: findBuddies
  },
  {
    path: '/friendsactivity',
    name: 'Friends Activity',
    component: friendsActivity
  },
  {
    path: '/noti',
    name: 'Notifications',
    component: noti
  },
  {
    path: '/signup',
    name: 'Signup',
    component: signup
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: statistics
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to, from, next) => {
  const session = refSession()
  if (!['/login', '/register'].includes(to.path) && !session.user) {
    next('/login')
  } else {
    next()
  }
})

export default router;