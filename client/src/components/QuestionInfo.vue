<template>
  <div v-if="question" class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p>{{question.question}}</p>
      </div>
      <div class="flip-card-back">
        <p>{{question.answer}}</p>
        <p><a v-bind:href="question.url" target="_blank">{{question.url}}</a></p>

      </div>
    </div>
    <button v-on:click="handleDelete">Delete question</button>
    <p> Have I Mastered this question? 
      <input type="checkbox" v-model="question.isMastered"/>
    </p>
  </div>
</template>

<script>
import {eventBus} from '../main'

export default {
  name: 'question-info',
  props: ['question'],
  methods: {
    handleDelete: function() {
      eventBus.$emit("question-delete", this.question._id);
    }
  }
}
</script>
<style scoped>
/* container for the card */
.flip-card {
  background-color: white;
  width: 400px;
  height: 200px;
  perspective: 1000px;
}
/* needed to position the card */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
/* flip the card */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
/* puts the card front and back in the right positions - it is cool without it! */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}
/* style the front side */
.flip-card-front {
  background-color: hsl(180, 100%, 90%)
;
  color: black;
}
/* Style the back side */
.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>
