import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/pages/About"
import Login from '@/components/Login.vue'; 
import Account from '@/components/Account.vue'

const routes = [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: Main,
      meta: { requiresAuth: true }, 
    },
    {
      path: '/about',
      component: About,
      meta: { requiresAuth: true }, 
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    },
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  router.beforeEach((to, from, next) => {
    const isLoggedIn = "kek"
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isLoggedIn) {
        next('/login');
      } else {
        next();
      }
    } else {
      next();
    }
  });
export default router;