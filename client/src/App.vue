<template>
  <div id="app">
    <header class="text-content">
      <div class="text-2">
        <span>My Coding Pal</span>

      </div>
      <img
        id="laptop"
        src="https://media.giphy.com/media/hVroWQ82fmn0WmGAxa/giphy.gif"
      />
      <div>
        <!-- <button class="grow" v-on:click="component = 'add-question-topic'">Add a Topic</button>
        <button class="grow" v-on:click="component = 'add-question-form'">Add a Question</button> -->
        <button v-on:click="handleAddQuestionClick"><a href="#add-form">Add a Question</a></button>
        <button class="grow" v-on:click="component = ''">x</button>
      </div>
    </header>
    <div class="navbar">
      <div id="add-form">
    <add-question-form v-if="showAddQuestionForm"></add-question-form>
    </div>    
    </div>
    <question-filter-form :questions="questions" />
    <div id="list-and-info">
      <div class="questionsInfo">
        <question-info :question="selectedQuestion" />
        <question-update-form v-if="selectedQuestion" :selected-question="selectedQuestion" />
      </div>
    </div>
    <questions-list class="questionsList" :questions="filteredQuestions" />
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
    // hasQuestionBeenMastered: function(question){
    //   const idsOfMasteredQuestions = (this.masteredQuestions.map(masteredQuestion => masteredQuestion._id))
    //   return idsOfMasteredQuestions.includes(question._id)
    // },
    // hasQuestionNotBeenMastered: function(question){
    //   const idsOfNotMasteredQuestions = (this.notMasteredQuestions.map(notMasteredQuestion => notMasteredQuestion._id))
    //   return idsOfNotMasteredQuestions.includes(question._id)
    // },
    // hasQuestionBeenManaged: function(question){
    //   const idsOfManagedQuestions = (this.managedQuestions.map(managedQuestion => managedQuestion._id))
    //   return idsOfManagedQuestions.includes(question._id)
    // },
    // markMasteredQuestions: function(question) {
    //   // if (this.hasQuestionNotBeenMastered(question))
    //   this.masteredQuestions.push(question)
    //   // const index = notMasteredQuestions.indexOf(question._id);
    //   // if (index > -1) {
    //   //   notMasteredQuestion.splice(index, 1);
    //   // }
    // },
    // markNotMasteredQuestions: function(question) {
    //   // if (this.hasQuestionBeenMastered(question))
    //   this.notMasteredQuestions.push(question)
    // },
    // markManagedQuestions: function(question) {
    //   // if (this.hasQuestionNotBeenMastered(question))
    //   this.managedQuestions.push(question)
    // },

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

#secondList{
  color: magenta;
}

.questionsInfo {
  position: relative;
  left: 100px;
  top: 20px;
  align-items: flex-start;
}

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
