<template>
  <section>
    <h2>Questions</h2>
    <div>
    <!-- <table>
      <thead>
        <tr>
          <th> -->
    <questions-list-item v-for="(question) in questions" :key="question._id" :question="question"/>

     <!-- v-on:click="handleClick">{{question.question}}</question-info> -->

  <!-- </table> -->
  </div>
</section>
</template>

    <!-- <button v-on:click="handleClick">Look at the question</button> -->

<script>
import QuestionService from '../services/QuestionService';
import QuestionsListItem from './QuestionsListItem'
import {eventBus} from '../main'

export default {
  name: 'questions-list',
  props: ['questions'],
  components: {
    'questions-list-item': QuestionsListItem
  }

}
</script>

<style>

</style>
