<template>
    <ul>
        <li :class="{active: activeOption==='poor'}"> <button @click="setActiveOption('poor')" type="button">poor</button> </li>
        <li :class="{active: activeOption==='average'}"> <button @click="setActiveOption('average')" type="button">average</button> </li>
        <li :class="{active: activeOption==='great'}"> <button @click="setActiveOption('great')" type="button">great</button> </li>
    </ul>
</template>

<script>
    export default{
        props: ['value'],
        emits: ['update:value'],
        // data(){
        //     return{
        //         activeOption: this.value
        //     }
        // },
        computed:{
            activeOption() {
                return this.value
            },
        },
        methods: {
            setActiveOption(option){
                this.$emit('update:value', option);
            }
        }
    }
</script>

<style scoped>
.active {
    border-color: #f0f;

}
.active button {
    color: #f0f;
}
ul{
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
}
li{
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    background-color: transparent;
    border: none;
    font: inherit;
    cursor: pointer;
}

</style>