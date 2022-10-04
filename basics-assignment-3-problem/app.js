const app = Vue.createApp({
    data(){
        return {
            count: 0,
            text: 'Not there yet',
        }
    },
    watch:{
        result(){
            setTimeout(()=>{
                this.count = 0
            }, 5000)
            
        }
    },
    computed:{
        result(){
            if(this.count>37) return 'Too much!'
            else if (this.count<37) return 'Not there yet'
            return 37
        }
    },
    methods:{
        incrementCount(num){
            this.count+=num
        }
    }
})

app.mount('#assignment')