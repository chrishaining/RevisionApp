<template>
  <section>
      <h2>Questions</h2>
    <div v-for="question in questions">
      <p>{{question.question}}</p>

    </div>
   </section>
</template>

<script>
import QuestionService from '../services/QuestionService';

export default {
name: 'questions-list',
props: ['questions']
// components: {
//     'question-info': QuestionInfo
// }
}
</script>

<style>

</style>
