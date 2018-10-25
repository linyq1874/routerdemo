import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/views/page1/index')
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@/views/page2/index')
    }
  ]
})
