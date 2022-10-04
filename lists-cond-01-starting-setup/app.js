const app = Vue.createApp({
  data() {
    return {
        goals: [],
        text: '',
        
      };
  },
  methods:{
    addGoal(){
      this.goals.push(this.text)
      this.text = ''
    },
    removeGoal(goalIdx){
      this.goals = this.goals.filter((el, idx)=>idx!==goalIdx)
    },
    
  }
});

app.mount('#user-goals');
