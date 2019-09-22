<template>
  <div v-if="question">
      <p>{{question.question}}</p>
  </div>
</template>

<script>
export default {
  name: 'question-info',
  props: ['question']

}
</script>

<style>

</style>
