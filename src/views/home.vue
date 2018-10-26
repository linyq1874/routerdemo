<template>
  <div id="app">
    <img src="../assets/logo.png" alt="" >
    <ul>
      <router-link v-for="(item, index) in routerParams" :key="index" tag="li" :to=item.link>
        {{item.name}}
      </router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        routerParams: [
          {link:'/page1',name:'page1'},
          {link:'/page2',name:'page2'}
        ]
      }
    },
    methods:{
     
    }
  }
</script>

<style>
  li{
    cursor: pointer;
  }
</style>
