<template>
  <section>
      <h2>Questions</h2>
    <div> 
    <question-info v-for="(question, index) in questions" :key="index" :question="question"/> 
    </div>
   </section>
</template>

<script>
// import QuestionInfo from "./components/QuestionInfo";

export default {
name: 'question-list',
props: ['questions']
// components: {
//     'question-info': QuestionInfo
// }
}
</script>

<style>

</style>