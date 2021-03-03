import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contrast from '@/components/contrast'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contrast',
      component: contrast
    },
    {
      path: '/contrast',
      name: 'contrast',
      component: contrast
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
