const baseURL = 'http://localhost:3000/api/questions/'

export default{
  getQuestions(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  addQuestionCard(question) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
  }
}
