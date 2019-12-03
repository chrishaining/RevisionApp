use quiz;
db.dropDatabase();
db.questions.insertMany([
  {
    "question": "What is Rapid Application Development?",
    "answer": "It prioritises rapid prototyping and quick feedback.",
    "url": "https://kissflow.com/rad/rapid-application-development/",
    "topic": "Working Methods"
  },

  {
    "question": "What is the Waterfall model?",
    "answer": "The traditional software development model. The stages are: requirements analysis; design; development; testing; maintenance.",
    "url": "https://en.wikipedia.org/wiki/Waterfall_model",
    "topic": "Working Methods"
  },

  {
    "question": "What is an expression? Give an example.",
    "answer": "In most cases I've seen, it's the code to the left of the = sign in a statement. The expression is equal to a value. For instance, in '3 + 5 = 8', '3 + 5' is the expression.",
    "url": "https://www.webopedia.com/TERM/E/expression.html",
    "topic": "Theory"
  },

  {
    "question": "What is a statement? Give an example.",
    "answer": "An expression plus a value, for example '1 + 2 = 3'.",
    "url": "https://en.wikipedia.org/wiki/Statement_(computer_science)",
    "topic": "Theory"
  },

  {
    "question": "What is the difference between an expression and a statement? Give examples.",
    "answer": "A statement is made up of an expression plus a value. For instance, in the statement '1+1=2', '1+1' is the expression and '2' is the value.",
    "url": "https://en.wikipedia.org/wiki/Statement_(computer_science)",
    "topic": "Theory"
  },

  {
    "question": "What is iteration? Give an example.",
    "answer": "A loop that goes through instructions. There are conditions for when iteration happens - such as while a particular condition holds. Examples include FOR, WHILE and UNLESS loops. ",
    "url": "https://prezi.com/tvoflvm-1xf_/p3-explain-sequence-selection-and-iteration-as-used-in-computing/",
    "topic": "PDA"
  },

  {
    "question": "What is selection? Give an example.",
    "answer": "One of the three basic programming structures. Selection is when a question is answered and there may be more than one outcome. An IF statement is an example of selection.",
    "url": "https://prezi.com/tvoflvm-1xf_/p3-explain-sequence-selection-and-iteration-as-used-in-computing/",
    "topic": "Theory"
  },

  {
    "question": "What is a sequence? Give an example.",
    "answer": "A set of instructions in order.",
    "url": "https://www.webopedia.com/TERM/S/sequence.html",
    "topic": "Theory"
  },

  {
    "question": "What method do you use to make a string all lower case?",
    "answer": ".toLowerCase()",
    "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
    "topic": "JavaScript"
  },

  {
    "question": "What is a computed property? How and why would you use one?",
    "answer": "It's a method for a complex logic. You would put it inside the script tags. It's useful, because too much complex logic in your in-template expressions can be hard to read and maintain.",
    "url": "https://vuejs.org/v2/guide/computed.html",
    "topic": "Vue"
  },

  {
    "question": "What is a callback?",
    "answer": "A function that is used in another function as an argument.",
    "url": "https://developer.mozilla.org/en-US/docs/Glossary/Callback_function",
    "topic": "JavaScript"
  },

  {
    "question": "What is a higher order function?",
    "answer": "A function that can take another function as an argument.",
    "url": "https://www.sitepoint.com/higher-order-functions-javascript/",
    "topic": "JavaScript"
  },

  {
    "question": "In Ruby, what keyword do you use to create a function?",
    "answer": "Def - this is because you are defining a function.",
    "url": "https://www.sitepoint.com/higher-order-functions-javascript/",
    "topic": "Ruby"
  },

  {
    "question": "What is instantiation?",
    "answer": "The process of creating an instance of a class. ",
    "url": "https://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Classes#Instantiation",
    "topic": "Ruby"
  },

  {
    "question": "What is a Vue directive? Give examples.",
    "answer": "A piece of code in the markup (HTML) that tells the app what to do to a DOM element. Examples - v-bind, v-if, v-on:click",
    "url": "https://012.vuejs.org/guide/directives.html",
    "topic": "Vue"
  },

  {
    "question": "What is Entity Relationship Modelling?",
    "answer": "A diagram of the entities in a database and the relationships between those entities. We did this when we diagrammed our SQL databases. There are a few links for this - https://www.guru99.com/er-diagram-tutorial-dbms.html",
    "url": "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model",
    "topic": "Modelling"
  },

  {
    "question": "What is Incremental Methodology?",
    "answer": "A method of software development where the model is designed, implemented and tested incrementally (a little more is added each time) until the product is finished. Sounds very like Agile.",
    "url": "https://www.testingexcellence.com/incremental-model/",
    "topic": "Working Methods"
  },

  {
    "question": "Which good practice in program design refers to the ease with which software can be used on computer confugurations other than its current one? A: Reliability; B: Efficiency; C: Portability; D: Functionality",
    "answer": "C: Portability",
    "url": "https://en.wikipedia.org/wiki/Software_portability",
    "topic": "Theory"
  },

  {
    "question": "Which of the following are advantages of an Agile approach? A: Working software is delivered frequently; B: late changes in requirements are welcomed; C: The project can easily get taken off track; D: No working software is produced until late during the life cycle; E: Regular adaptation to changing circumstances.",
    "answer": "A, E. B is also possible",
    "url": "https://www.agilealliance.org/agile101/",
    "topic": "Working Methods"
  },

  {
    "question": "Which good practice in program design looks at the frequency of software failure, where failure is an unacceptable effect or behaviour occuring under permissible operating conditions?",
    "answer": "Reliability",
    "url": "https://practicingruby.com/articles/qualities-of-great-software",
    "topic": "Theory"
  },

  {
    "question": "What is a data dictionary?",
    "answer": "a set of information describing the contents, format, and structure of a database and the relationship between its elements, used to control access to and manipulation of the database.",
    "url": "https://en.wikipedia.org/wiki/Data_dictionary",
    "topic": "Modelling"
  },

  {
    "question": "Which of these are functional requirements? A: certification requirements; B: Authentication; C: Capacity; D: Recoverability; E: Administrative functions",
    "answer": "Certification requirements; Authentication; Administrative functions. Capacity and Recoverability are non-functional requirements.",
    "url": "https://reqtest.com/requirements-blog/functional-vs-non-functional-requirements/",
    "topic": "Theory"
  },

  {
    "question": "What are some advantages of the Spiral Model? ",
    "answer": "Good for risk handling; good for large projects; flexibility in requirements; customer satisfaction.",
    "url": "https://www.geeksforgeeks.org/software-engineering-spiral-model/",
    "topic": "Working Methods"
  },

  {
    "question": "What are some disadvantages of the Spiral Model? ",
    "answer": "Complex; expensive; too much is dependent on risk analysis; difficulty in time management",
    "url": "https://www.geeksforgeeks.org/software-engineering-spiral-model/",
    "topic": "Working Methods"
  },

  {
    "question": "What are the differences between PROCEDURAL PROGRAMMING and OBJECT ORIENTED PROGRAMMING?",
    "answer": "PROCEDURAL PROGRAMMING: a list of istructions to tell the computer what to do step by step. OOP: an object is a component of a program that knows how to perform certain actions and how to interact with other elements of the program.",
    "url": "https://study.com/academy/lesson/object-oriented-programming-vs-procedural-programming.html",
    "topic": "Theory"
  },

  {
    "question": "What is WHITE BOX TESTING?",
    "answer": "White box testing is testing that requires knowledge of the code. TDD is an example. The opposite to white box testing is black box testing, which doesn't require knowledge of the code.",
    "url": "https://technologyconversations.com/2013/12/11/black-box-vs-white-box-testing/",
    "topic": "Theory"
  },

  {
    "question": "What are the four software testing levels?",
    "answer": "Unit testing (aka component testing); integration testing; system testing; acceptance testing.",
    "url": "http://softwaretestingfundamentals.com/software-testing-levels/",
    "topic": "Theory"
  },

  {
    "question": "What is regression testing?",
    "answer": "When you test software to make sure than a new feature/fix has not affected other parts of the software.",
    "url": "http://softwaretestingfundamentals.com/regression-testing/",
    "topic": "Theory"
  },

  {
    "question": "What are the six qualities of good program design?",
    "answer": "Functionality, Reliability, Usability, Efficiency, Maintainability, Portability",
    "url": "https://practicingruby.com/articles/qualities-of-great-software",
    "topic": "Theory"
  },

  {
    "question": "What is a logic error? Give an example.",
    "answer": "An error that causes the program to operate incorrectly but not crash. Common examples include: sequencing errors, where a line of code is correctly formed but in the wrong place; errors in calculations, for example subtracting instead of adding; errors when checking conditions, for example using < instead of ≤",
    "url": "https://www.bbc.co.uk/bitesize/guides/zpqpn39/revision/2",
    "topic": "Theory"
  },

  {
    "question": "What is an execution error? Give an example.",
    "answer": "This is an error that occurs when the program is running. For example, asking the program to divide a value by 0 or trying to open a text file that cannot be found on the system. The program will be translated successfully but when you run the code, it will crash.",
    "url": "https://www.bbc.co.uk/bitesize/guides/zpqpn39/revision/2",
    "topic": "Theory"
  },

  {
    "question": "What is encapsulation?",
    "answer": "A way of structuring data so that direct access to an object's components/data is restricted. It's a principle within OOP. See https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/#targetText=Encapsulation%20is%20one%20of%20the,an%20object%20from%20the%20outside.",
    "url": "https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)",
    "topic": "Theory"
  },

  {
    "question": "Why is encapsulation important?",
    "answer": "If we didn't use it,  See https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/#targetText=Encapsulation%20is%20one%20of%20the,an%20object%20from%20the%20outside.",
    "url": "https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)",
    "topic": "Theory"
  },

  {
    "question": "Discuss: MOST CONSTRAINED VARIABLE",
    "answer": "It's a heuristic used in problem-solving in artificial intelligence. The heuristic is to find the most constrained part of a problem - it may simplify your thinking. It's a useful concept to keep in mind when trying to understand and solve a problem. A non-coding example: in sudoko, you should start with the column/row/square that has the most squares already filled in. The reason is that this is the column/row/square with the most constraints.",
    "url": "https://www.amazon.co.uk/Think-Like-Programmer-Introduction-Creative/dp/1593274246",
    "topic": "Theory"
  }
    ])
