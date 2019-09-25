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
        <!-- <button class="grow" v-on:click="component = 'add-question-topic'">Add a Topic</button>
        <button class="grow" v-on:click="component = 'add-question-form'">Add a Question</button> -->
        <button v-on:click="handleAddQuestionClick"><a href="#add-form">Add a Question</a></button>
        <button class="grow" v-on:click="component = ''">x</button>
      </div>
    </header>
    <div class="navbar">
        <component v-bind:is="component"></component>
    </div>
    <question-filter-form :questions="questions" />
    <div id="list-and-info">
      <div class="questionsInfo">
        <question-info :question="selectedQuestion" />
        <question-update-form v-if="selectedQuestion" :selected-question="selectedQuestion" />
      </div>
    </div>
    <questions-list class="questionsList" :questions="filteredQuestions" />
    <questions-list id="secondList" :questions="filteredQuestions" />
    <div id="add-form">
    <add-question-form v-if="showAddQuestionForm"></add-question-form>
    <button><a href="#">Back</a></button>
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
      masteredQuestions: [],
      notMasteredQuestions: [],
      managedQuestions: [],
      component: "",
      questions: [],
      selectedQuestion: null,
      selectedTopicFilter: ""
    };
  },
  methods: {
    hasQuestionBeenMastered: function(question){
      const idsOfMasteredQuestions = (this.masteredQuestions.map(masteredQuestion => masteredQuestion._id))
      return idsOfMasteredQuestions.includes(question._id)
    },
    hasQuestionNotBeenMastered: function(question){
      const idsOfNotMasteredQuestions = (this.notMasteredQuestions.map(notMasteredQuestion => notMasteredQuestion._id))
      return idsOfNotMasteredQuestions.includes(question._id)
    },
    hasQuestionBeenManaged: function(question){
      const idsOfManagedQuestions = (this.managedQuestions.map(managedQuestion => managedQuestion._id))
      return idsOfManagedQuestions.includes(question._id)
    },
    markMasteredQuestions: function(question) {
      // if (this.hasQuestionNotBeenMastered(question))
      this.masteredQuestions.push(question)
      // const index = notMasteredQuestions.indexOf(question._id);
      // if (index > -1) {
      //   notMasteredQuestion.splice(index, 1);
      // }
    },
    markNotMasteredQuestions: function(question) {
      // if (this.hasQuestionBeenMastered(question))
      this.notMasteredQuestions.push(question)
    },
    markManagedQuestions: function(question) {
      // if (this.hasQuestionNotBeenMastered(question))
      this.managedQuestions.push(question)
    },

    handleAddQuestionClick: function() {
      this.showAddQuestionForm = true
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
      this.showAddQuestionForm = false;
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
    eventBus.$on("mastered-question-added", question => this.markMasteredQuestions(question));

    eventBus.$on("not-mastered-question-added", question => this.markNotMasteredQuestions(question));

    eventBus.$on("managed-question-added", question => this.markManagedQuestions(question));




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

/* .fade-and-grow {
  opacity:0.5;
} */

.fade-and-grow:hover{
  opacity:2;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

/* .text-2 {
  display: flex;
}

.text-2 span {
  color: hsl(180, 100%, 40%);
  display: block;
  font-size: 45px;
  font-weight: 450;
  line-height: 1;
  position: relative;
  text-shadow: 0px 3px 6px rgba(0,0,0,0.2);
  opacity: 0;
  animation: animate-2 .4s ease-in-out forwards;
} */

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
	/* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
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

/* h1 {
	font-weight: 300;
} */

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

/* #app {
  background-color: white;
  color: teal;
  font-family: sans-serif;
}

/* .text-1 {
  background: black;
  display: inline-block;
  overflow: hidden;
  position: relative;
}

.text-1 span{
  white-space: nowrap;

} */

/* .text-2 {
  display: flex;
}

.text-2 span {
  color: hsl(180, 100%, 40%);
  display: block;
  font-size: 45px;
  font-weight: 450;
  line-height: 1;
  position: relative;
  text-shadow: 0px 3px 6px rgba(0,0,0,0.2);
  opacity: 0;
  animation: animate-2 .4s ease-in-out forwards;
}

@keyframes animate-2 {
  0%{
    opacity: 0;
    transform: rotateY(180deg) translateY(100px), scale(0.4);
  }
  100%{
    opacity: 1;
    transform: rotateY(0deg) translateY(0px), scale(1);
  }
}

header,
.navbar {
  padding: 10px;
  text-align: center;
  letter-spacing: 3px;
}



.grow {
  opacity:0.9;
}
.grow:hover{
  opacity:2;
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
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
} */
</style>
