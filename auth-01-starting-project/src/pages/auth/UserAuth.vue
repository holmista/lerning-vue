<template>
    <div>
        <base-dialog :show="!!error" title="an error occurred" @close="handleError">
            <p>{{error}}</p>
        </base-dialog>
        <base-dialog :show="isLoading" title="authenticating..." fixed>
            <base-spinner></base-spinner>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitForm">
                <div class="form-control">
                    <label for="email">e-mail</label>
                    <input type="email" id="email" v-model.trim="email">
                </div>
                <div class="form-control">
                    <label for="password">password</label>
                    <input type="password" id="password" v-model.trim="password">
                </div>
                <p v-if="!formIsValid">please enter valid credentials</p>
                <p v-if="error">{{error}}</p>
                <base-button>{{mode}}</base-button>
                <base-button mode="flat" type="button" @click="switchMode">{{mode === 'login' ? 'signup' : 'login'}}</base-button>
            </form>
        </base-card>
    </div>
</template>

<script>
export default{
    data(){
        return{
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null
        }
    },
    methods: {
        switchMode(){
            this.mode = this.mode === 'login' ? 'signup' : 'login'
        },
        async submitForm(){
            this.formIsValid = true
            if(this.email==='' || this.password.length<6 || this.email.includes('@')===false){
                this.formIsValid = false
                return
            }
            this.isLoading = true
            try{
                if(this.mode === 'login'){
                await this.$store.dispatch('login', {email: this.email, password: this.password})
            }
            else{
                await this.$store.dispatch('signup', {email: this.email, password: this.password})
            }
            }catch(err){
                this.error = err.message || 'failed to authenticate'
            }
            this.isLoading = false
        },
        handleError(){
            this.error = null
        },
       
        // async loin(){
        //     const res = await axios.post('https://vue-course-b84cf-default-rtdb.europe-west1.firebasedatabase.app/login.json', {
        //         email: this.email,
        //         password: this.password
        //     })
        //     console.log(res)
        // }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>