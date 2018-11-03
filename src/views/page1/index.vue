<template>
    <div>
       我是 page1，点F5刷新，页面出现了不想要的logo以及导航
       <button @click="back">back</button>
       <button @click="next">next</button>
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
            this.$router.push("/page2")
        }
    }
}
</script>

<style scoped>

</style>


