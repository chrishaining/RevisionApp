<template lang="html">
  <form class="" action="index.html" method="post">
    <h1>Add a new card</h1>
    <label for="question">Add a question</label>
    <input type="text" v-model="question" required>
    <label for="answer">Add an answer</label>
    <input type="text" v-model="answer" required>
    <label for="url">Add a URL</label>
    <input type="text" v-model="url">
    <!-- <label for="topic">Add a topic</label>
    <input type="text" v-model="topic"> -->
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
  }
}
</script>

<style lang="css" scoped>
</style>
