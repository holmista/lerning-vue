import mutations from "../mutations"
import actions from "../actions"

const counterModule = {
    namespaced: true,
    state(){
        return {
            counter: 0,
        }
    },
    mutations: mutations,
    actions: actions,
    getters:{
        finalCounter(state){
            return state.counter * 2
        }
    },
}

export default counterModule