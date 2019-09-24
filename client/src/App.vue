<template>
  <div id="app">
    <header>
      <h1>My Coding Pal</h1>
      <img
        id="laptop"
        src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
      />
      <div>
        <button v-on:click="component = 'add-question-topic'">Add a Topic</button>
        <button v-on:click="component = 'add-question-form'">Add a Question</button>
        <button v-on:click="component = ''">X</button>
      </div>
    </header>
    <div class="navbar">
      <keep-alive>
        <component v-bind:is="component"></component>
      </keep-alive>
    </div>
    <question-filter-form :questions="questions" />
    <questions-list class="questionsList" :questions="filteredQuestions" />
    <div class="questionsInfo">
      <question-info :question="selectedQuestion" />
      <question-update-form v-if="selectedQuestion" :selected-question="selectedQuestion" />
    </div>
  </div>
</template>

<script>
import QuestionsList from "./components/QuestionsList";
import QuestionInfo from "./components/QuestionInfo";
import QuestionUpdateForm from "./components/QuestionUpdateForm";
import QuestionService from "./services/QuestionService";
import AddQuestionForm from "./components/AddQuestionForm";
import AddQuestionTopic from "./components/AddQuestionTopic";
import { eventBus } from "@/main";
import QuestionFilterForm from "./components/QuestionFilterForm";

export default {
  name: "app",
  components: {
    "questions-list": QuestionsList,
    "question-info": QuestionInfo,
    "question-update-form": QuestionUpdateForm,
    "add-question-form": AddQuestionForm,
    "add-question-topic": AddQuestionTopic,
    "question-filter-form": QuestionFilterForm
  },
  data() {
    return {
      component: "",
      questions: [],
      selectedQuestion: null,
      selectedTopicFilter: ""
    };
  },
  computed: {
    filteredQuestions() {
      if (!this.selectedTopicFilter) return this.questions;
      return this.questions.filter(question => {
        return question.topic.toLowerCase() === this.selectedTopicFilter.toLowerCase();
      });
    }
  },
  mounted() {
    QuestionService.getQuestions().then(
      questions => (this.questions = questions)
    );

    eventBus.$on("question-selected", question => {
      this.selectedQuestion = question;
    });
    eventBus.$on("question-update", questionToUpdate => {
      QuestionService.updateQuestion(questionToUpdate);
      const index = this.questions.findIndex(
        question => question._id === questionToUpdate._id
      );
      this.questions.splice(index, 1, questionToUpdate);
    });
    eventBus.$on("submit-card", question => {
      this.questions.push(question);
    });
    eventBus.$on("question-delete", id => {
      QuestionService.deleteQuestion(id);
      const index = this.questions.findIndex(question => question._id === id);
      this.questions.splice(index, 1);
    });

    //receive information for the filter
    eventBus.$on("topic-selected", topic => {
      this.selectedTopicFilter = topic;
    });
  }
};
</script>

<style>
#app {
  background-color: white;
  color: teal;
  font-family: sans-serif;
}

header,
.navbar {
  padding: 10px;
  text-align: center;
}

#laptop {
  text-align: center;
  width: 200px;
}

button {
  background-color: hsl(180, 100%, 40%);
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.questionsList {
  position: relative;
  left: 100px;
  top: 20px;
}

.questionsInfo {
  position: relative;
  left: 100px;
  top: 20px;
}
</style>
