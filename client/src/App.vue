<template>
  <div id="app">
    <header class="text-content">
      <div class="text-2">
        <span>M</span>
        <span>y</span>
        <span> </span>
        <span>C</span>
        <span>O</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span> </span>
        <span>P</span>
        <span>a</span>
        <span>l</span>
      </div>
      <img
        id="laptop"
        src="https://media.giphy.com/media/hVroWQ82fmn0WmGAxa/giphy.gif"
      />
      <div>
        <button class="grow" v-on:click="component = 'add-question-topic'">Add a Topic</button>
        <button class="grow" v-on:click="component = 'add-question-form'">Add a Question</button>
        <button class="grow" v-on:click="component = ''">x</button>
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
  methods: {
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

header,
.navbar {
  padding: 10px;
  text-align: center;
  letter-spacing: 3px;
}

.text-2{
  font-size: 40px;
  letter-spacing: 10px;
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
  transition:all 0.3s ease;
}
.fade-and-grow:hover{
  opacity:2;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

#laptop {
  text-align: center;
  width: 250px;
}

body {
	margin: 0;
	width: 100%;
	height: 100vh;
	font-family: "Exo", sans-serif;
	color: teal;
  background-color: white;
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

h3 {
	color: #eee;
	font-weight: 100;
}

h5 {
	color:#eee;
	font-weight:300;
}

a,
a:hover {
	text-decoration: none;
	color: #ddd;
}

</style>
