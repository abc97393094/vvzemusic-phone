import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import local from '@/components/local'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main/mymusic'
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [{
        path: '/main/mymusic',
        component: local
      }]
    }
  ]
})