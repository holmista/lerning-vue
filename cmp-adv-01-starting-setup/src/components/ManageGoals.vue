<template>
    <h2>manage goals</h2>
    <input type="text" ref="goal">
    <button @click="addGoal">add goal</button>
    <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>
                input is invalid 
            </h2>
            <button @click="inputIsInvalid=false">okay</button>
        </error-alert>
    </teleport>
</template>
<script>
    import ErrorAlert from './ErrorAlert.vue';
    export default {
        components:{ErrorAlert},
        data(){
            return {
                inputIsInvalid: false,
            }
        },
        methods: {
            addGoal() {
                const value = this.$refs.goal.value;
                if(value===''){
                    this.inputIsInvalid = true; 
                }
            }
        }
    }
</script>