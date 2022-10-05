const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.$refs.userText;
      console.log(this.$refs.userText)
    },
  },
  beforeCreate(){
    console.log('before create')
  },
  created(){
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUnmount(){
    console.log('before unmount')
  }
});

app.mount('#app');
