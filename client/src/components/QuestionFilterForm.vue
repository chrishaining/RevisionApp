<template>
<div>
    <label for="topic">Flavours:</label>
    <input list="topics" name="topic">
  <datalist id="topics">
      <option value="Chocolate">chocolate</option>
      <option value="Mint">Mint</option>
      <option value="Vanilla"/>
  </datalist>
 </div>
</template>

<script>

export default {
name : "question-filter-form",
props: ['filteredQuestions']
}
</script>

<style>

</style>