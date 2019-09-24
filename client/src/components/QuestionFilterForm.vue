<template>
<div>
    <!-- <label for="topic">Flavours:</label>
    <input list="topics" v-model="topic" name="topic">
  <datalist id="topics"> -->

      <!-- <option  v-for="topic in questions"  :topic="topic">{{question.topic}}</option> -->
      <!-- :key="topic" -->
  <!-- </datalist> -->
  <button v-on:click="filterJavaScriptQuestions"> JS </button>

 </div>
</template>

<script>

export default {
name : "question-filter-form",
props: ['questions'],
methods: {
    filterJavaScriptQuestions: function() {
        const javaScriptQuestions = this.questions.filter (function(question) {
        return question.topic.toLowerCase() === "javascript"
        })
        console.log(javaScriptQuestions)
    }
}
}

</script>

<style>

</style>