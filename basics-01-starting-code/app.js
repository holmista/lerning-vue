const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'learn vue',
            courseGoalB: 'master vue',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods:{
        outputGoal(){
            const randomNum = Math.random()
            if(randomNum < 0.5) return this.courseGoalA
            return this.courseGoalB
        }
    }
})
app.mount('#user-goal')