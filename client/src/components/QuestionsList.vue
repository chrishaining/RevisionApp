<template>
  <section>
    <h2>Questions</h2>
    <div>
    <questions-list-item v-for="question in questions" :key="question._id" :question="question"/>
  </div>
</section>
</template>
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
