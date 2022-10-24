// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  
  routes: [
    {
      path: '/',
      redirect: {
          name: "login"
      }
  },
  {
      path: "/",
      name: "login",
      component: () => import('@/views/initial-login/IntialLogin.vue'),
  },


    {
    
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      name: 'main',
      children: [
        {
          path: '/Explore-Drugs',
          name: 'Explore-Drugs',
          component: () => import('@/views/explore-drugs/ExploreDrugs.vue'),
        },
        {
          path: '/Explore-Trials',
          name: 'Explore-Trials',
          component: () => import('@/views/explore-trials/ExploreTrials.vue'),
        },
        {
          path: 'FAQ',
          name: 'FAQ',
          component: () => import('@/views/faq/FAQ.vue'),
        },
        {
          path: '/About',
          name: 'About',
          component: () => import('@/views/about/About.vue'),
        },
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: '/Publications',
          name: 'Publications',
          component: () => import('@/views/publications/Publications.vue'),
        },
      ],
      beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
            next(false);
        } else {
            next();
        }
    }
    
    },




  ],
})


export default router
