<template>
  <div>
    <p>我是 page1，点F5刷新，页面出现了不想要的logo以及导航</p>
    <button @click="backHome">back</button>
    <ul>
      <router-link tag="li" v-for="(item,index) in routerParams" :key="index" :to=item.link>
        {{item.name}}
      </router-link>
    </ul>


    <router-view></router-view>


  </div>
</template>

<script>
  export default {
    name: 'page1',
    data() {
      return {
        routerParams: [
          {link:'/page1/page1-1',name:'page1-1'},
          {link:'/page1/page1-2',name:'page1-2'},
        ]
      }
    },
    methods: {
      backHome() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
li{
  cursor: pointer;
}
</style>


