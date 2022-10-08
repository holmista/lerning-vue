<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">loading...</p>
      <p v-else-if="!isLoading && (!results || Object.keys(results).length===0) && !error">no results</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <ul v-else-if="!isLoading && Object.keys(results).length>0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.userName"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: {},
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      try{
        this.error=null
        const res = await axios.get('https://vue-course-b84cf-default-rtdb.europe-west1.firebasedatabase.app/surveys.json');
        this.results = res.data
      }
      catch(err){
        this.error = "failed  to fetch data, try again later"
      }
      finally{
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>