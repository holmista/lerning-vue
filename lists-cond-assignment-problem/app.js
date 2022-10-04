const app = Vue.createApp({
    data(){
        return{
            task: "",
            tasks: [],
            show:true
        }
    },
    computed:{
        buttonCaption(){
            return this.show?'Hide':'Show'
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.task)
            this.task = ""
        },
        setShow(){
            this.show = !this.show
        }
    }
})

app.mount('#assignment')