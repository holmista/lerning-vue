<template>
    <li>
        <h2>
            {{name}} {{isFavorite?'(favorite)':''}}
        </h2>
        <button @click="setDetailsAreVisible">{{toggleShow}}</button>
        <button @click="setFavorite">toggle favorite</button>
        <ul v-if="detailsAreVisible">
            <li>{{phone}}</li>
            <li>{{email}}</li>
        </ul>
        <button @click="deleteContact">delete</button>
    </li>
</template>

<script>
export default {
  // props: ['name', 'phone', 'email', 'isFavorite'],
  props: {
    id: {
      type: Number,
      requied: true,
    },
    name: {
      type: String,
      requied: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      requied: false,
      default: true,
    },
  },
  emits: ['toggle-favorite', 'delete-contact'],
  data() {
    return {
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
    setFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteContact() {
      this.$emit('delete-contact', this.id);
    },
  },
};
</script>
