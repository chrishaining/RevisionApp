<template>
  <div id="filterForm">
    <!-- <label for="topic"></label> -->
    <div id="search-box">
      <label for="topics">Select a topic</label>
      <input v-on:keyup="handleSelectTopic" list="topics" v-model="selectedTopic" name="topic" />
      <datalist id="topics">
        <option v-for="topic in topics" :key="topic" :value="topic">{{topic}}</option>
      </datalist>
    </div>
    <!-- <button v-on:click="handleSelectTopic">Search by Topic</button> -->
  </div>
</template>
<script>
import QuestionsListItem from "./QuestionsListItem";
import {eventBus} from '@/main'

export default {
  name: "question-filter-form",
  props: ["questions"],
  data() {
    return{
      selectedTopic: ''
    }
  },
  components: {
    "questions-list-item": QuestionsListItem
  },
  methods: {
    handleSelectTopic() {
      eventBus.$emit("topic-selected", this.selectedTopic);
    }
  },

  computed: {
    topics() {
      return new Set(this.questions.map(question => question.topic));
    }
  }
};
</script>

<style lang="css">

#filterForm {
  display: flex;
  margin: 1em;
  padding: 1em;
}

#search-box {
  margin: 0.5em;
}

</style>
