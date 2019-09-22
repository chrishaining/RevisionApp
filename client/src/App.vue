<template>
  <div id="app">
    <questions-list :questions="questions"/>
  </div>
</template>

<script>
import QuestionsList from './components/QuestionsList';
import QuestionService from './services/QuestionService';
import {eventBus} from '@/main';

export default {
  name: 'app',
  components: {
    'questions-list': QuestionsList
  },
  data(){
    return{
      questions: [],
      selectedQuestion: null
    }
  },
  mounted(){
    QuestionService.getQuestions()
    .then(questions => this.questions = questions)

  eventBus.$on('question-selected', question => {
    this.selectedQuestion = question
  })
  }
}

</script>

<style>

</style>
