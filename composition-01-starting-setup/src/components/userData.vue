<template>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject } from "vue";
export default {
   props: {
      firstName: String,
      lastName: String,
   },
   setup(props){
        const username = computed(() => {
            return props.firstName + " " + props.lastName;
    });
    const age = inject("age");
    return {
        username,
        age
    };
   }
}
</script>