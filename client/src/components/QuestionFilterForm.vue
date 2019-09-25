<template>
  <div id="filterForm">
    <button v-on:click="handleSelectTopic">Search by Topic</button>
    <!-- <label for="topic"></label> -->
    <input list="topics" v-model="selectedTopic" name="topic" />
    <datalist id="topics">
      <option v-for="topic in topics" :value="topic">{{topic}}</option>
    </datalist>
    <input type="image" id="magnifying_glass" src="https://loading.io/spinners/magnify/index.searching-for-loading-icon.svg" v-on:click="handleSelectTopic">
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
  display: inline-block;
}

#magnifying_glass{
  width: 45px;
}


</style>
