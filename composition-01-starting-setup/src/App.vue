<template>
  <section class="container">
    <UserData :firstName="firstName" :lastName="lastName" />
    <button @click="incrementAge">increment age</button>
    <div>
      <input type="text" placeholder="first name" v-model="firstName">
      <input type="text" placeholder="last name" ref="lastNameInputRef">
      <button @click="setLastName">set last name</button>
    </div>
  </section>
</template>

<script>
import {ref, computed, provide} from 'vue'
import UserData from './components/userData.vue'
export default {
  components: { UserData },
    setup() {
        const firstName = ref("");
        const lastName = ref("");
        const age = ref(30);
        const lastNameInputRef = ref(null);
        provide("age", age);
        // const setFirstName = (e) => {
        //   firstName.value = e.target.value
        // }
        // const setLastName = (e) => {
        //   lastName.value = e.target.value
        // }
        // watch([firstName, lastName], (newVal, oldVal) => {
        //   // console.log(newVal, oldVal)
        // })
        const username = computed(() => {
            return firstName.value + " " + lastName.value;
        });
        const setLastName = () => {
            lastName.value = lastNameInputRef.value.value;
        };
        return {
            firstName,
            lastNameInputRef,
            lastName,
            username,
            setLastName
            // setFirstName,
            // setLastName
        };
    },
    
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>