<template>
  <section>
    <h2>Questions</h2>
    <question-info v-for="question in questions" :question="question"/>
    <button v-on:click="handleClick">Look at the question
    </button>

  </div>
</section>
</template>

<script>
import QuestionService from '../services/QuestionService';
import QuestionInfo from './QuestionInfo'
import {eventBus} from '../main'

export default {
  name: 'questions-list',
  props: ['questions'],
  components: {
    'question-info': QuestionInfo
  },
  methods: {
    handleClick() {
      eventBus.$emit('question-selected', this.question);
    }
  }
}
</script>

<style>

</style>
