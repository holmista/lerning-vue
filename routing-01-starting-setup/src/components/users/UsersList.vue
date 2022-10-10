<template>
  <button @click="confirm">confirm</button>
  <button @click="setSaveChanges">save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      saveChanges: false
    }
  },
  methods:{
    confirm(){
      this.$router.push('/teams');
    },
    setSaveChanges(){
      this.saveChanges = true;
    }
  },
  beforeRouteLeave(to, from, next){
    if(this.saveChanges){
      next();
    }else{
      alert('unsaved changes');
      next(false);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>