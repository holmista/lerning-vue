<template>
     <ul>
        <ResourceItem v-for="resource in storedResources" :id="resource.id"
        :title="resource.title" :description="resource.description"
        :link="resource.link" :key="resource.id"/>
    </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue'
    export default{
        inject: ['storedResources'],
        components: {
            'ResourceItem': ResourceItem
        },
    }
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}</style>