import Router from 'vue-router'
import Select from '../pages/Select.vue'
import Practice from '@/pages/Practice.vue'
import Vue from 'vue'

Vue.use(Router)
export const router = new Router({
  routes: [{
    path: '/select',
    name: 'select',
    component: Select
  },
  {
    path: '/practice',
    name: 'practice',
    component: Practice,
    props: ({
      params
    }) => params
  },
  {
    path: '/',
    redirect: 'select',
  },
  ],
  mode: 'history',
})