const app = Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:1,
                    name:"tornike",
                    phone:"12345",
                    email:"aa@a.a"
                },
                {
                    id:2,
                    name:"guja",
                    phone:"12344",
                    email:"aa@a.aa"
                },
            ]
        }
    }
})

app.component('friend-contact', {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
        </ul>
    </li>
    `,
    data(){
        return {
            detailsAreVisible:true,
            friend:{
                id:2,
                name:"guja",
                phone:"12344",
                email:"aa@a.aa"
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
            console.log(this.detailsAreVisible)
        }
    }
})

app.mount('#app')