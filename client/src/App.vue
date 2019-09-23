<template>
  <div id="app">
    <add-question-form/>
    <questions-list :questions="questions"/>
    <question-info :question="selectedQuestion"/>

  </div>
</template>

<script>
import QuestionsList from './components/QuestionsList';
import QuestionInfo from './components/QuestionInfo';
import QuestionService from './services/QuestionService';
import AddQuestionForm from './components/AddQuestionForm';
import {eventBus} from '@/main';

export default {
  name: 'app',
  components: {
    'questions-list': QuestionsList,
    'question-info': QuestionInfo,
    'add-question-form': AddQuestionForm

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


      eventBus.$emit('submit-card', question => {
        QuestionService.addQuestionCard(question)
        .then(questionWithId => this.questions.push(questionWithId))
      });

  }
}

</script>

<style>

</style>
