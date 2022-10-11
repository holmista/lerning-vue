<template>
    <h3>{{$store.getters.finalCounter}}</h3>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['finalCounter'])
    }
}
</script>