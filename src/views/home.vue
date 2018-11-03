<template>
    <div>
        <img src="../assets/logo.png" alt="" v-if="show">
        <ul v-if="show">
        <router-link v-for="(item, index) in routerParams" :key="index" tag="li" :to=item.link>
            {{item.name}}
        </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routerParams: [
        { link: "/page1", name: "page1" },
        { link: "/page2", name: "page2" }
      ],
      
    };
  },
  computed:{
      show(){
          return this.$store.state.show
      }
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log('to',to);
    this.$store.commit('setShow',false)
    next()
  }
};
</script>

<style>
li {
  cursor: pointer;
}
</style>


