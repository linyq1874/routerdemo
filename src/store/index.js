import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex({
    state:{
        show: true
    },
    mutation:{
        setShow(state,data){
            state.show = data
        }
    }
})