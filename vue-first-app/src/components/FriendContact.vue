<template>
    <li>
        <h2>
            {{friend.name}}
        </h2>
        <button @click="setDetailsAreVisible">{{toggleShow}}</button>
        <ul v-if="detailsAreVisible">
            <li>{{friend.phone}}</li>
            <li>{{friend.email}}</li>
        </ul>
    </li>
</template>

<script>
export default {
  data() {
    return {

      friend: {
        id: 1,
        name: 'tornike',
        phone: '12345',
        email: '1@1.com',
      },
      detailsAreVisible: true,
    };
  },
  computed: {
    toggleShow() {
      return this.detailsAreVisible ? 'hide' : 'Show';
    },
  },
  methods: {
    setDetailsAreVisible() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
