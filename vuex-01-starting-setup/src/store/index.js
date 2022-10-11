import {createStore} from 'vuex'
import mutations from './mutations'
import actions from './actions'
import counterModule from './counter/index'

const store = createStore({
    modules:{counter:counterModule},
    state(){
        return {
            loggedIn: false
        }
    },
    mutations: mutations,
    actions: actions,
})
export default store