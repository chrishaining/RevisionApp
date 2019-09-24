<template lang="html">
  <div>
  <form class="addQuestionForm" v-on:submit="handleSubmit">
    <h1>Add a new card</h1>
    <label for="question">Add a question</label>
    <textarea v-model="question" required></textarea>
    <label for="answer">Add an answer</label>
    <textarea type="text" v-model="answer" required></textarea>
    <label for="url">Add a URL</label>
    <textarea type="text" v-model="url"></textarea>
    <label for="topic">Add a topic</label>
    <textarea v-model="topic"></textarea>
    <input type="submit" name="submit" value="Save">
  </form>
  <div>
  <img id="pen" src="https://images.squarespace-cdn.com/content/v1/5ba839e47fdcb8cb90744a44/1552606354923-X7FVEZCSI9VEOJQAJF6F/ke17ZwdGBToddI8pDm48kMHvrvYuMOO96aZNC4W0J91Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGzFGyRKEvnFLNedpOxzyA7lUIbsppCyMzD9XoGN4ON4Ju3E9Ef3XsXP1C_826c-iU/drawn-pen-writing-gif-transparent-560573-681746.gif?format=500w"/>
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
      topic: ""
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      const question = {
        question: this.question,
        answer: this.answer,
        url: this.url,
        topic: this.topic
      }
      QuestionService.addQuestionCard(question)
      .then(res => eventBus.$emit('submit-card', res));

    }
  }
}
</script>

<style lang="css" scoped>

.addQuestionForm{
  font: Tahoma;
  color: red;
  display: inline-grid;
}

#pen {
  text-align: center;
  width: 50px;
}
</style>
