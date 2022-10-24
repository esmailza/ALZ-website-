import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAgile from "vue-agile"
import Vuex from "vuex"
import Router from 'vue-router'
import zingchartVue from 'zingchart-vue';

Vue.component('zingchart', zingchartVue)

Vue.use(Router)

Vue.use(Vuex);



Vue.component( FontAwesomeIcon)

Vue.use(VueAgile);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

const store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state, status) {
              state.authenticated = status;
          }
      }
  }
);


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
      path: "/login",
      name: "login",
      component: () => import('@/views/initial-login/IntialLogin.vue'),
  },


    {
    
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),

      children: [
        // {
        //   path: '/Explore-Drugs',
        //   name: 'Explore-Drugs',
        //   component: () => import('@/views/explore-drugs/ExploreDrugs.vue'),
        // },
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
          path: '/Home',
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
});

new Vue({
  created () {
    AOS.init()
  },

  vuetify,
  render: h => h(App),

  router: router,
  store: store
}).$mount('#app')
