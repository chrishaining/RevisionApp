<template lang="html">
  <form class="addTopicForm" v-on:submit="handleSubmit">
    <h1>Add a new topic</h1>
    <label for="topic">Add a topic </label>
    <textarea v-model="topic"></textarea>
    <input type="submit" name="submit" value="Save">
  </form>
</template>

<script>

import {eventBus} from '@/main';
import QuestionService from '@/services/QuestionService';

export default {
  name: "add-question-topic",
  data() {
    return {
      topic: ""
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      const question = {
        topic: this.topic
      }
      QuestionService.addQuestionCard(question)
      .then(res => eventBus.$emit('submit-topic', res));

    }
  }
}
</script>

<style lang="css" scoped>

.addTopicForm{
  color: purple;
  display: inline-grid;
}

</style>
