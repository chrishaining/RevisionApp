<template lang="html">
  <div>
    <form class="form" v-on:submit="handleSubmit">
      <h1>Add a new card</h1>
      <label for="question">Add a question</label>
      <textarea v-model="question" required></textarea>
      <label for="answer">Add an answer</label>
      <textarea type="text" v-model="answer" required></textarea>
      <label for="url">Add a URL</label>
      <textarea type="text" v-model="url"></textarea>
      <label for="topic">Add a topic</label>
      <textarea v-model="topic"></textarea>
      <input class="submit" type="submit" name="submit" value="Save">
    </form>
    <div>
    </div>
  </div>
</template>

<script>

import {eventBus} from '@/main';
import QuestionService from '@/services/QuestionService';

export default {
  name: "add-question-form",
  data() {
    return {
      question: "",
      answer: "",
      url: "",
      topic: "",
      isMastered: false
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      const question = {
        question: this.question,
        answer: this.answer,
        url: this.url,
        topic: this.topic,
        isMastered: this.isMastered
      }
      QuestionService.addQuestionCard(question)
      .then(res => eventBus.$emit('submit-card', res));

    }
  }
}
</script>

<style lang="css" scoped>

/* .addQuestionForm{ */
  /* color: #A64AC9; */
  /* display: inline-grid; */
  /* background-color: #A64AC9; */
/* } */

</style>
