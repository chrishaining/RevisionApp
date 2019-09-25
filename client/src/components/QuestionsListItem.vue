<template lang="html">
<div>
  <table>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    <tr>
      <td v-on:click="handleClick">{{question.question}}</td>

      <!-- if hasBeenMastered == true -->
      <td v-if="hasBeenMastered">Mastered!</td>
      <img class="mastered-gif" v-if="hasBeenMastered" src="https://thumbs.gfycat.com/InsignificantVibrantAphid.webp">

      <!-- if hasBeenMastered == true -->
      <td v-if="hasBeenManaged">Managed!</td>
      <img class="managed-gif" v-if="hasBeenManaged" src="https://media.giphy.com/media/1yjph8svhJjnuxHGdV/giphy.gif">


      <!-- if hasNotBeenMastered == true -->
      <td v-if="hasNotBeenMastered">Failed!</td>
      <img class="sucked-gif" v-if="hasNotBeenMastered" src="https://thumbs.gfycat.com/BriskParallelAfricanwilddog-size_restricted.gif">

    </tr>
    </table>
  <!-- <button v-on:click="question.show = !question.show">Show Answer</button> -->
  <!-- <p v-show="question.show">{{question.answer}}</p> -->
  <button class="fade-and-grow" v-if="!hasBeenMastered" v-on:click="addMasteredQuestions">Mark as Mastered</button>
  <button class="fade-and-grow" v-if="!hasBeenManaged" v-on:click="addManagedQuestions">Mark as Managed</button>
  <button class="fade-and-grow" v-if="!hasNotBeenMastered" v-on:click="addNotMasteredQuestions">Mark as Failed</button>


</div>
</template>

<script>

import {eventBus} from '../main'

export default {
  name: 'questions-list-item',
  props: ['question', 'hasBeenMastered', 'hasNotBeenMastered', 'hasBeenManaged'],
  methods: {
    handleClick() {
      eventBus.$emit('question-selected', this.question);
    },
    addMasteredQuestions(){
    eventBus.$emit("mastered-question-added", this.question)
    },
    addNotMasteredQuestions(){
    eventBus.$emit("not-mastered-question-added", this.question)
    },
    addManagedQuestions(){
    eventBus.$emit("managed-question-added", this.question)
    }
  }
}
</script>

<style lang="css" scoped>

button {
  background-color: hsl(180, 100%, 40%);
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
}

.mastered-gif{
  width: 80px;
}

.managed-gif{
  width: 60px;
}

.sucked-gif{
  width: 80px;
}

table {
  width: 80%;
  border-collapse: separate;
}

/* tr:hover{
  background-color: aqua;
} */

td, th {
  text-align: left;
}

td {
  padding: 10px 20px 0px 0px;
}

th {
  padding: 0px 20px 10px 0px;
  border-bottom: 1px solid lavender;
}

</style>
