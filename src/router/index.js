import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/page1',
      name: 'page1',
      component: () => import('@/views/page1/index'),
      redirect: '/page1/page1-1',
      children: [
        {
          path:'page1-1',
          name:'page1-1',
          component: () => import('@/views/page1/children/page1-1')
        },
        {
          path:'page1-2',
          name:'page1-2',
          component: () => import('@/views/page1/children/page1-2')
        }
      ]
    },
    {
      path: '/page2',
      name: 'page2',
      component: () => import('@/views/page2/index')
    },
    {
      path:'*',
      redirect: '/home'
    }
  ]
})
