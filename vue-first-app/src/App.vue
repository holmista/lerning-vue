<template>
  <header>
    <h1>My friends</h1>
  </header>
  <NewFriend @add-contact="addContact">
    g
  </NewFriend>
  <ul>
    <friend-contact v-for="friend in friends" :name="friend.name" :phone="friend.phone"
     :email="friend.email" :isFavorite="friend.isFavorite"
     :key="friend.id" :id="friend.id" @toggle-favorite="toggleFavorite(friend.id)"
      @delete-contact="deleteContact(friend.id)"></friend-contact>
  </ul>
</template>

<script>
import NewFriend from './components/NewFriend.vue';

export default {
  data() {
    return {
      friends: [
        {
          id: 0,
          name: 'tornike',
          phone: '12345',
          email: '1@1.com',
          isFavorite: true,
        },
        {
          id: 1,
          name: 'guja',
          phone: '12344',
          email: '2@1.com',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavorite(id) {
      this.friends[id].isFavorite = !this.friends[id].isFavorite;
    },
    addContact(friend) {
      const maxId = Math.max(...this.friends.map((el) => el.id));
      this.friends = [...this.friends, { id: maxId + 1, ...friend }];
    },
    deleteContact(id) {
      this.friends = this.friends.filter((el) => el.id !== id);
    },
  },
  components: { NewFriend },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
  * {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li, form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
