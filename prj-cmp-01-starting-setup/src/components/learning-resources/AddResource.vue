<template>
    <BaseDialog v-if="inputIsInvalid" title="invalid input">
        <template #default>
            <p>some input values are invalid</p>
            <p>input at least one character in each input</p>
        </template>
        <template #actions>
            <BaseButton @click="closeDialog">close</BaseButton>
        </template>
    </BaseDialog>
    <BaseCard>
        <form @submit.prevent>
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" id="title" v-model="title">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" rows="5" v-model="description"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" id="link" v-model="link">
            </div>
            <div class="actions">
                <BaseButton @click="handleSubmit()" type="submit">Add Resource</BaseButton>
            </div>
        </form>
    </BaseCard>
</template>
<script>
    import BaseCard from '../UI/BaseCard.vue';
    import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';
    export default{
        inject: ['addResource'],
        components: { BaseCard, BaseButton, BaseDialog },
        data(){
            return{
                title: '',
                description: '',
                link: '',
                inputIsInvalid: false
            }
        },
        methods:{
            handleSubmit(){
                const resource = {
                    id: Math.random(),
                    title: this.title,
                    description: this.description,
                    link: this.link
                }
                for(const key of Object.keys(resource).filter(key => key !== 'id')){
                    console.log(resource[key])
                    if(resource[key].trim() === ''){
                        this.inputIsInvalid = true
                        return
                    }
                }
                this.addResource(resource)
                this.title = ''
                this.description = ''
                this.link = ''
            },
            closeDialog(){
                this.inputIsInvalid = false
            }
        }
    }
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>