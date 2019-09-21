<template>
<div>  
  <questions-list :questions="questions"/>
  </div>
</template>

<script>
import QuestionsList from './components/QuestionsList';

export default {
name: 'app',
components: {
    'questions-list': QuestionsList
},
data(){
    return{
        questions: []
    }
}
}
</script>

<style>

</style>