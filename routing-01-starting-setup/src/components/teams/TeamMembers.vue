<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">team2</router-link>
  </section>
</template>
 
<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  props:['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods:{
    loadTeamMembers(teamId){
      const team = this.teams.find((team) => team.id === teamId);
      this.teamName = team.name;
      this.members = team.members.map((memberId) => {
        return this.users.find((user) => user.id === memberId);
    });
    }
  },
  created() { 
    this.loadTeamMembers(this.teamId);
  },
  watch:{
    teamId(newId){
      this.loadTeamMembers(newId);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>