<template>
    <BaseCard>
        <BaseButton @click="selectComponent('AddResource')" :mode="selected==='AddResource'?null:'flat'">add resource</BaseButton>
        <BaseButton @click="selectComponent('StoredResources')" :mode="selected==='StoredResources'?null:'flat'">stored resources</BaseButton>
    </BaseCard>
    <keep-alive>
        <component :is="selected"></component>
    </keep-alive>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import { computed } from '@vue/reactivity';
    export default{
        components: { BaseCard, BaseButton, StoredResources, AddResource },
        data(){
            return{
                selected:"StoredResources",
                storedResources: [
                    {id: 1, title: 'vue', description: 'Description 1', link: 'https://www.vuejs.org'},
                    {id: 2, title: 'google', description: 'Description 2', link: 'https://www.google.com'},
                ]
            }
        },
        methods: {
            selectComponent(component){
                this.selected = component
            },
            deleteResource(resourceId){
                this.storedResources = this.storedResources.filter(resource => resource.id !== resourceId)
            },
            addResource(resource){
                this.storedResources.unshift(resource)
            }
        },
        provide() {
            return{'storedResources': computed(()=>this.storedResources), 'deleteResource': this.deleteResource, 'addResource': this.addResource}
        }
    
}
</script>