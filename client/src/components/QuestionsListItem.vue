<template lang="html">
<div>
       <p v-on:click="handleClick">{{question.question}}</p>
       <p v-if="hasBeenMastered">Mastered!</p>
       <button v-if="!hasBeenMastered" v-on:click="addMasteredQuestions">Mark as Mastered</button>
</div>
</template>

<script>

import {eventBus} from '../main'

export default {
  name: 'questions-list-item',
  props: ['question', 'hasBeenMastered'],
  methods: {
    handleClick() {
      eventBus.$emit('question-selected', this.question);
    },
    addMasteredQuestions(){
    eventBus.$emit("mastered-question-added", this.question)
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

</style>
