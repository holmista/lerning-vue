<template>
    <transition-group tag="ul" name="user-list">
        <li v-for="user in users" :key="user.name" @click="removeUser(user.name)">
            <p>{{user.name}}</p>
        </li>
    </transition-group>
    <div>
        <input type="text" v-model="newUser">
        <button @click="addUser">add user</button>
    </div>
</template>

<script>
    export default{
       data(){
           return{
               users: [
                   {name: 'John', age: 20},
                   {name: 'Jane', age: 25},
                   {name: 'Jack', age: 30},
               ],
               newUser : ''
           }
       },
       methods:{
            addUser(){
                this.users.push({name: this.newUser, age: 20});
                this.newUser = '';
            },
            removeUser(name){
                this.users = this.users.filter(user => user.name !== name);
            }
       }
    }
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
li{
    border:1px solid #ccc;
    padding: 1rem;
    text-align: center;
}
.user-list-enter-from{
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active{
    transition: all 1s ease-out;
}
.user-list-enter-to, .user-list-leave-from{
    opacity: 1;
    transform: translateX(0px);
}


.user-list-leave-active{
    transition: all 1s ease-in;
    position: absolute;
}
.user-list-leave-to{
    opacity: 0;
    transform: translateX(30px);
}
.user-list-move{
    transition: transform 1s ease;
}
</style>