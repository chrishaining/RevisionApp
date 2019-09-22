<template>
  <div v-if="question" id="card">
      <p>{{question.question}}</p>
      <p>{{question.answer}}</p>

  </div>
</template>

<script>
export default {
  name: 'question-info',
  props: ['question']

}
</script>

<style scoped>
#card {
  background-color: dodgerblue;
}

</style>
