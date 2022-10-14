<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goal.visible">{{goal.name}}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from 'vue';
export default {
  data(){
    return{
      goal: {
        name: 'Master Vue',
        visible: true
      }
    }
  },
  methods: {
    toggleGoal(){
      this.goal.visible = !this.goal.visible;
    }
  }
  // setup(){
  //   // const goal = ref({
  //   //   name: 'Master Vue',
  //   //   visible: true,
  //   // })
  //   // const toggleGoal = ()=>{
  //   //   goal.value.visible = !goal.value.visible;
  //   // }
  //   const goal = reactive({
  //     name: 'Master Vue',
  //     visible: true,
  //   })
  //    const toggleGoal = ()=>{
  //     goal.visible = !goal.visible;
  //   }
  //   return{
  //     goal,
  //     toggleGoal
  //   }
  // }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>