import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { getSession } from '../viewModel/session';

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to, _, next) => {
  const session = getSession();
  if (to.meta.requiresAuth && !session.user) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;