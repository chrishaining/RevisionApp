<template>
  <div>
    <div v-if="question" class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-side flip-card-front">
          <p>{{question.question}}</p>
        </div>
        <div class="flip-card-side flip-card-back">
          <p>{{question.answer}}</p>
          <p><a class="links" v-bind:href="question.url" target="_blank">Click for more info</a></p>
        </div>
      </div>
    </div>
    <!-- <button v-on:click="handleDelete">Delete question</button> -->
    <!-- <label id="mastered" for="isMastered">Have I Mastered this question?</label> -->
    <!-- <input type="checkbox" name="isMastered" v-model="question.isMastered"/> -->
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
  /* background-color: white; */
  height: 400px;
  perspective: 1000px;
  align-items: center;
  font-weight: bold;
  font-size: 1.5em;
  margin: 1em;
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

.flip-card-side {
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* puts the card front and back in the right positions - it is cool without it! */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}
/* style the front side */
.flip-card-front {
  background-color: #FFB48F;
  color: black;
}
/* Style the back side */
.flip-card-back {
  background-color: #17E9E0;
  color: black;
  transform: rotateY(180deg);
  border-radius: 10px;
}

#mastered {
  padding: 1em;
  font-weight: bold;
}

.links {
  color: blue;
}

</style>
