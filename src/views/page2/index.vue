<template>
    <div>
       我是 page2.....，点F5刷新，页面出现了不想要的logo以及导航
       <button @click="back">back</button>
       <button @click="next">pre</button>
    </div>
</template>

<script>
export default {
    name:'page1',
    data(){
        return {

        }
    },
    methods: {
        back(){
            this.$router.push('/')
        },
        next(){
            this.$router.push("/page1")
        }
    }
}
</script>

<style scoped>

</style>


