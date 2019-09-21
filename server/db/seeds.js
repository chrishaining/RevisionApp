use quiz;
db.dropDatabase();

db.questions.insertMany([
  {
    "question": "test Question 1 here",
    "answer": "test answer 1 here",
    "topic": "javaScript"
},

{
  "question": "test Question 2 here",
  "answer": "test answer 2 here",
  "topic": "Ruby"
}
])
