const express = require('express');
const app = express();
// const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

// app.use(parser.json());
app.use(cors());


MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('quiz');
  const quizCollection = db.collection('questions');
  const quizRouter = createRouter(quizCollection);
  app.use('/api/questions', quizRouter);
})
.catch(console.error);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
});
