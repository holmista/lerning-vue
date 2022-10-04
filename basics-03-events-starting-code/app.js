const app = Vue.createApp({

  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  computed:{
    fullname(){
      console.log('fullname called')
      return this.name ? `${this.name} buchukuri` : ''
    }
  },
  watch:{
    counter(value){
      if(value>50){
        this.counter = 0
      }
    }
  },
  methods:{
    getFullName(){
      console.log('getFullName called')
      return this.name ? `${this.name} buchukuri` : ''
    },
    confirmName(){
      this.confirmedName = this.name
    },
    submitForm(){
    },
    increment(num){
      this.counter += num
    },
    decrement(num){
      this.counter -= num
    },
  }
});

app.mount('#events');
