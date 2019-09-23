<template>
  <div id="app">
    <questions-list :questions="questions"/>
    <question-info :question="selectedQuestion"/>
    <question-update-form :selected-question="selectedQuestion" />
  </div>
</template>

<script>
import QuestionsList from './components/QuestionsList';
import QuestionInfo from './components/QuestionInfo';
import QuestionUpdateForm from './components/QuestionUpdateForm';
import QuestionService from './services/QuestionService';
import { eventBus } from '@/main';

export default {
  name: 'app',
  components: {
    'questions-list': QuestionsList,
    'question-info': QuestionInfo,
    'question-update-form': QuestionUpdateForm
  },
  data(){
    return{
      questions: [],
      selectedQuestion: null
    }
  },
  mounted(){
    eventBus.$on('question-selected', question => {
      this.selectedQuestion = question
    });
    eventBus.$on('question-update', questionToUpdate => {
      QuestionService.updateQuestion(questionToUpdate)
      const index = this.questions.findIndex(question => question._id === questionToUpdate._id);
      this.questions.splice(index, 1, questionToUpdate);
    });

    QuestionService.getQuestions()
    .then(questions => this.questions = questions)
  }
}

</script>

<style>

</style>
