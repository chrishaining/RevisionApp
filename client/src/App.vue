<template>
  <div id="app">
    <questions-list :questions="questions"/>
  </div>
</template>

<script>
import QuestionsList from './components/QuestionsList';
import QuestionService from './services/QuestionService';

export default {
  name: 'app',
  components: {
    'questions-list': QuestionsList
  },
  data(){
    return{
      questions: []
    }
  },
  mounted(){
    QuestionService.getQuestions()
    .then(questions => this.questions = questions)
  }
}

</script>

<style>

</style>
