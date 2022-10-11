<template>
    <button v-if="!$store.state.loggedIn" @click="login">login</button>
    <button v-else @click="logout">logout</button>
</template>

<script>
export default{
    methods:{
        login(){
            this.$store.dispatch('login');
        },
        logout(){
            this.$store.dispatch('logout');
        }
    }
}
</script>