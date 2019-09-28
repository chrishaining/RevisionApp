<template lang="html">
<div>
  <table>
    <tr>
      <th></th>
    </tr>
    <tr>
      <td v-on:click="handleClick">{{question.question}}</td>
    </tr>
    </table>


</div>
</template>

<script>

import {eventBus} from '../main'

export default {
  name: 'questions-list-item',
  props: ['question'],
  methods: {
    handleClick() {
      eventBus.$emit('question-selected', this.question);
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

td, th {
  text-align: left;
}

td {
  cursor: pointer;
  padding: 10px 20px 0px 0px;
}

th {
  padding: 0px 20px 10px 0px;
  border-bottom: 1px solid black;
}

</style>
