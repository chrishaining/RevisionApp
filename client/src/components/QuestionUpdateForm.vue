<template lang="html">
  <form class="updateForm" v-on:submit.prevent="handleUpdate">
    <h2>Update Question</h2>
    <label for="question">Question:</label>
    <textarea id="question" :placeholder="selectedQuestion.question" v-model="question" required></textarea>

    <label for="answer">Answer:</label>
    <textarea id="answer" :placeholder="selectedQuestion.answer" v-model="answer" required></textarea>

    <label for="url">Topic:</label>
    <textarea id="topic" :placeholder="selectedQuestion.topic" v-model="topic"></textarea>

    <label for="url">Add a link:</label>
    <textarea id="url" v-model="url"></textarea>

    <input type="submit" value="Update" id="update" />
  </form>
</template>

<script>
import { eventBus } from '@/main';
import QuestionService from '@/services/QuestionService.js'

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
  props: ['selectedQuestion'],
  methods: {
    handleUpdate(event) {
      event.preventDefault();
      eventBus.$emit('question-update', Object.assign({}, this.selectedQuestion, this.$data));
      this.question = '',
      this.answer = '',
      this.topic = ''

    }
  }
}
</script>

<style lang="css" scoped>

.updateForm{
  margin-top: 30px;
  color: orange;
  display: inline-grid;
}

</style>
