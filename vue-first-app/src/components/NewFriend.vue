<template>
    <form action="" @submit.prevent>
        <div>
            <label for="">name</label>
            <input id="name" type="text" v-model="name">
        </div>
        <div>
            <label for="">phone</label>
            <input id="phone" type="text" v-model="phone">
        </div>
        <div>
            <label for="">email</label>
            <input id="email" type="text" v-model="email">
        </div>
        <button :disabled="!isValidForm" @click="submit">add contact</button>
    </form>
</template>
<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      isFavorite: false,
    };
  },
  computed: {
    isValidForm() {
      if (this.name.length > 0 && this.phone.length > 6 && this.email.length > 3) return true;
      return false;
    },
  },
  methods: {
    submit() {
      this.$emit('add-contact', {
        name: this.name, phone: this.phone, email: this.email, isFavorite: this.isFavorite,
      });
      this.name = '';
      this.phone = '';
      this.email = '';
    },
  },
};

</script>
