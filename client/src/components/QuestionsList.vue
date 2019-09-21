<template>
  <section>
      <h2>Questions</h2>
    <div v-for="(question, index) in questions" :key="index">
      <p>{{question.question}}</p> 
    <!-- <question-info v-for="(question, index) in questions" :key="index" :question="question"/>  -->

    </div>
   </section>
</template>

<script>
// import QuestionInfo from "./components/QuestionInfo";
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