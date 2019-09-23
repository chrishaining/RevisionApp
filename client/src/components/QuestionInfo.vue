<template>
  <div v-if="question" id="card">
      <p>{{question.question}}</p>
      <p>{{question.answer}}</p>
      <!-- <form v-on:submit="handleUpdate">
        <h2>Update Question</h2>
        <label for=""></label>
        <input v-model></input>
      </form> -->

  </div>
</template>

<script>
import { eventBus } from '@/main';
import QuestionService from '@/services/QuestionService.js'

export default {
  name: 'question-info',
  props: ['question'],
  // methods: {
  //   handleUpdate: function() {
  //     eventBus.$emit('question-update', this.question);
  //   }
  }
}
</script>

<style scoped>
#card {
  background-color: dodgerblue;
}

</style>
