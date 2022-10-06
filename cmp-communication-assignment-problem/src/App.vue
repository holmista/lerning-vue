<template>
    <user-data @change-name="setName" @change-age="setAge" ></user-data>
    <active-user :username="name" :age="age"></active-user>
</template>
<script>
    export default{ 
        data(){
            return{
                name:'',
                age:'0'
            }
        },
        methods:{
            setName(name){
                console.log('called setName', name)
                this.name=name
            },
            setAge(age){
                this.age=age
            }
        }
     }
</script>