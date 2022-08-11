'use strict';

const quizData = [
   {
      question: 'What is the capital of Turkey?',
      a: 'Stambul',
      b: 'Kemer',
      c: 'Ankara',
      d: 'Antalia',
      correct: 'c'
   }, {
      question: 'What is the national animal of China?',
      a: 'Kenguru',
      b: 'Giant Panda',
      c: 'Polar Bear',
      d: 'Tiger',
      correct: 'b'
   }, {
      question: 'What is the noisiest city in the world?',
      a: 'Mexico',
      b: 'Tokio',
      c: 'Kiev',
      d: 'Hong Kong',
      correct: 'd'
   }, {
      question: '	How many continents are there?',
      a: '9',
      b: '7',
      c: '8',
      d: '6',
      correct: 'b'
   }, {
      question: 'What is the second largest country in Europe after Russia?',
      a: 'France',
      b: 'Spain',
      c: 'Germany',
      d: 'Ukraine',
      correct: 'a'
   }, {
      question: 'What is the longest river?',
      a: 'the Amazon River',
      b: 'the Nile',
      c: 'the Volga River',
      d: 'the Yang Tszi River',
      correct: 'b'
   }
];

const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
   cancelAnswer();

   const currentQuizData = quizData[currentQuiz];

   questionEl.innerText = currentQuizData.question;

   a_text.innerText = currentQuizData.a;
   b_text.innerText = currentQuizData.b;
   c_text.innerText = currentQuizData.c;
   d_text.innerText = currentQuizData.d;
}

function getSelected() {
   let answer = undefined;

   answersEls.forEach((answerEl) => {
      if (answerEl.checked) {
         answer = answerEl.id;
      }
   });

   return answer;
}

function cancelAnswer() {
   answersEls.forEach((answerEl) => {
      answerEl.checked = false;
   });
}

loadQuiz();

submitBtn.addEventListener('click', () => {

   const answer = getSelected();

   if (answer) {
      if (answer === quizData[currentQuiz].correct) {
         score++;
      }

      currentQuiz++;
      if (currentQuiz < quizData.length) {
         loadQuiz();
      } else {
         quiz.innerHTML = `<h3> You answered correctly at ${score} out of ${quizData.length} questions!</h3> <button class="button" onclick = "location.reload()" > Reload</button>`;
      }
   }
});