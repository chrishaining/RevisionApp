<template>
  <div>
    <label for="topic">Topics:</label>
    <input list="topics" v-model="selectedTopic" name="topic" />
    <datalist id="topics">
      <option v-for="topic in topics" :value="topic">{{topic}}</option>
      <!-- :key="topic"  -->
    </datalist>
    <button v-on:click="handleSelectTopic">Search</button>
    <!-- <p v-for="question in questions" :key="question._id"  > -->
    <!-- <section>
      <h2>Questions</h2>
      <ul class="questions-list">
        <questions-list-item
          v-for="question in javaScriptQuestions"
          :key="question._id"
          :question="question"
        />
      </ul>
    </section> -->
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

<style>
</style>