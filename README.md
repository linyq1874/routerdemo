# routerdemo

> 路由跳转方式

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 另外一种解决思路
  1、page1、page2作为首页的下一级路由，（不像现在的同一级路由） \
  2、使用vuex：在vuex控制首页logo以及导航的显示或隐藏（一切不想要的元素） \
  3、在router的index.js中 如下：
  ```bash
  import Vue from 'vue'
  import Router from 'vue-router'
  //anywhere
  import store from '../store/index';
  
  
  Vue.use(Router)
  
  const router = new Router({
    routes: [
      {
        path:'/page1',
        name:'page1',
        component: () => import('@/views/page1/index')
      },
      {
        path:'/page2',
        name:'page2',
        component: () => import('@/views/page2/index')
      }
    ]
  })
  
  router.beforeEach(function (to, from, next) {
  
    if(to.path == from.path || to.path == '/'){
      store.commit('setShow',true)
    }else{
      store.commit('setShow',false)
    }
  
    next();
  })
  
  export default router
  ```
  
