<template>
  <base-container v-if="$store.state.loggedIn" title="Vuex">
    <the-counter />
    <button @click="addOne">add 1</button>
    <favorite-value />
  </base-container>
  <base-container title="auth">
    <UserAuth/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    UserAuth
  },
  methods:{
    addOne(){
      this.$store.dispatch('counter/increase', {value:5});
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>