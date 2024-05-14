import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import { refSession } from '../viewModel/session';

const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach((to, _, next) => {
  const session = refSession();
  if (to.meta.requiresAuth && !session.user) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;