<template>
  <div id="app">
    <header class="text-content">
      <div class="text-2">
        <h1>My Coding Pal</h1>
      </div>
      <img id="laptop" src="./assets/Laptop-PNG-Image.png"/>
      <div>
        <button v-on:click="handleAddQuestionClick"><a href="#add-form">Add a Question</a></button>
      </div>
      <question-filter-form :questions="questions" />
    </header>
    <div class="navbar">
      <div id="add-form">
        <add-question-form v-if="showAddQuestionForm"></add-question-form>
      </div>
    </div>
    <div class="questions-container">
      <div class="list">
        <questions-list :questions="filteredQuestions" />
      </div>
      <div class="question-card">
        <question-info :question="selectedQuestion" />
        <question-update-form v-if="selectedQuestion" :selected-question="selectedQuestion" />
      </div>
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
      showAddQuestionForm: false,
      component: "",
      questions: [],
      selectedQuestion: null,
      selectedTopicFilter: ""
    };
  },
  methods: {
    handleAddQuestionClick: function() {
      this.showAddQuestionForm = true },

      getQuestions: function () {
        QuestionService.getQuestions()
        .then(questions => (this.questions = questions));
      }
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
      this.getQuestions();
      eventBus.$on("question-selected", question => {
        this.selectedQuestion = question;
      });
      eventBus.$on("question-update", questionToUpdate => {
        QuestionService.updateQuestion(questionToUpdate)
        .then(updatedQuestion => {
          this.getQuestions();
          this.selectedQuestion = updatedQuestion;
        });
        const index = this.questions.findIndex(
          question => question._id === questionToUpdate._id
        );
      });
      eventBus.$on("submit-card", question => {
        this.questions.push(question);
        this.showAddQuestionForm = false;
      });
      eventBus.$on("question-delete", id => {
        QuestionService.deleteQuestion(id);
        const index = this.questions.findIndex(question => question._id === id);
        this.questions.splice(index, 1);
        this.selectedQuestion = null;
      });
      eventBus.$on("topic-selected", topic => {
        this.selectedTopicFilter = topic;
      });
    }
  };
  </script>

  <style>

    #app {
      padding: 24px;
    }

.questions-container {
  display: flex;
}

    .questions-container > * {
      flex-basis: 50%;
    }

    header,
    .navbar {
      padding: 10px;
      text-align: center;
      letter-spacing: 3px;
    }

    .text-2{
      font-size: 30px;
      letter-spacing: 5px;
    }

    .fade-and-grow:hover{
      opacity:2;
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
    }

    #laptop {
      text-align: center;
      width: 200px;
    }

    body {
      margin: 0;
      width: 100%;
      height: 100vh;
      font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      color: black;
      background-size: 400% 400%;
      animation: gradientBG 15s ease infinite;
    }

    @keyframes gradientBG {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .container {
      width: 100%;
      position: absolute;
      top: 35%;
      text-align: center;
    }

    a,
    a:hover {
      text-decoration: none;
      color: white;
    }

  </style>
