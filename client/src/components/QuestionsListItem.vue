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

      <!-- if hasNotBeenMastered == true -->
      <td v-if="hasNotBeenMastered">Sucked!</td>
      <img class="sucked-gif" v-if="hasNotBeenMastered" src="https://thumbs.gfycat.com/BriskParallelAfricanwilddog-size_restricted.gif">

    </tr>
    </table>
  <!-- <button v-on:click="question.show = !question.show">Show Answer</button> -->
  <!-- <p v-show="question.show">{{question.answer}}</p> -->
  <button v-if="!hasBeenMastered" v-on:click="addMasteredQuestions">Mark as Mastered</button>
  <button v-if="!hasNotBeenMastered" v-on:click="addNotMasteredQuestions">Mark as Sucked</button>


</div>
</template>

<script>

import {eventBus} from '../main'

export default {
  name: 'questions-list-item',
  props: ['question', 'hasBeenMastered', 'hasNotBeenMastered'],
  methods: {
    handleClick() {
      eventBus.$emit('question-selected', this.question);
    },
    addMasteredQuestions(){
    eventBus.$emit("mastered-question-added", this.question)
    },
    addNotMasteredQuestions(){
    eventBus.$emit("not-mastered-question-added", this.question)
    }
  }

}
</script>

<style lang="css" scoped>

button {
  background-color: lightgrey;
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

.sucked-gif{
  width: 80px;
}

table {
  width: 80%;
  border-collapse: separate;
}

td, th {
  text-align: left;
}

td {
  padding: 10px 20px 0px 0px;
}

th {
  padding: 0px 20px 10px 0px;
  border-bottom: 1px solid teal;
}

</style>
