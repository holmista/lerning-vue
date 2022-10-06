<template>
    <div>
        <label>name</label>
        <input type="text" v-model="name" @input="changeName">
    </div>
    <div>
        <label>age</label>
        <input type="text" v-model="age" @input="changeAge">
    </div>
</template>
<script>
    export default{
        emits:['change-name', 'change-age'],
        data(){
            return {
                name:'',
                age:''
            }
        },
        methods:{
            changeName(){
                console.log('name', this.name)
                this.$emit('change-name', this.name)
            },
            changeAge(){
                this.$emit('change-age', this.age)
            }
        }
    }
</script>