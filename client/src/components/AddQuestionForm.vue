<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <h1>Add a new card</h1>
    <label for="question">Add a question</label>
    <input type="text" v-model="question" required>
    <label for="answer">Add an answer</label>
    <input type="text" v-model="answer" required>
    <label for="url">Add a URL</label>
    <input type="text" v-model="url">
    <label for="topic">Add a topic</label>
    <input type="text" v-model="topic">
    <input type="submit" name="submit" value="Save">
  </form>
</template>

<script>

import {eventBus} from '@/main';

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
    handleSubmit() {
      eventBus.$emit('submit-card', this.$data);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
