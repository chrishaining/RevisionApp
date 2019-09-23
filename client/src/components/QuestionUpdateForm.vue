<template lang="html">
  <form v-on:submit.prevent="handleUpdate">
    <h2>Update Question</h2>
    <label for="question">Question:</label>
    <input type="text" id="question" v-model="question" required></input>

    <label for="answer">Answer:</label>
    <input type="text" id="answer" v-model="answer" required></input>

    <label for="url">Topic:</label>
    <input type="text" id="topic" v-model="topic"></input>

    <label for="url">Add a link:</label>
    <input type="text" id="url" v-model="url"></input>

    <input type="submit" name="submit" value="Update" />
  </form>
</template>

<script>
import { eventBus } from '@/main';
// import QuestionService from '@/services/QuestionService.js'

export default {
  name: 'question-update-form',
  data() {
    return {
      question: '',
      answer: '',
      url: '',
      topic: ''
    };
  },
  methods: {
    handleUpdate: function() {
      eventBus.$emit('question-update', this.question);
      this.question = '';
      this.answer = '';
      this.topic = '';
      this.url = '';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
