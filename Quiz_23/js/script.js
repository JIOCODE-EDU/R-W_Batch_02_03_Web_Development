/* Quiz App */

/* Questions and Answers Array */

const Questions = [
  {
    question: "Which keyword is used to decalre a variable in javascript?",
    options: ["var", "int", "string", "define"],
    answer: 0,
  },
  {
    question: "Which method convert JSON to a javascript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()",
    ],
    answer: 0,
  },
  {
    question: "Which function runs after a delay?",
    options: ["setInterval()", "setTimeout()", "wait()", "delay()"],
    answer: 1,
  },
  {
    question: "Which function runs after a delay?",
    options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
    answer: 1,
  },
  {
    question: "Which array method adda item to the end?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0,
  },
];

let timeRemaining = 300;
let currentQuestion = 0;
let startTime = Date.now();
let selectedAnswer = null;
let score = 0;
let timerInterval;

console.log(score);
console.log('startTime' , startTime);



// Dom Elements

const quizBody = document.getElementById("quizBody");
const questionCounter = document.getElementById("questionCounter");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const timer = document.getElementById("timer");
const resultContainer = document.getElementById("resultsContainer");
const quizFooter = document.getElementById("quizFooter");
const restartBtn = document.getElementById("restartBtn");

// start app

const initQuizApp = () => {
  
  let timeRemaining = 300;
  let currentQuestion = 0;
  let startTime = Date.now();
  let selectedAnswer = null;
  let score = 0;
  let timerInterval;

  resultContainer.classList.add('content-hide')

  startTimer()
  loadQuestion()
};

const startTimer = () => {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      showResult()
    }

  }, 1000);
};

const updateTimerDisplay = () => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
};

const loadQuestion = () => {
  
  const question = Questions[currentQuestion];

  selectedAnswer = null;

  nextBtn.disabled = true;

  const progress = (currentQuestion / Questions.length) * 100;

  progressBar.style.width = progress + "%";

  progressBar.setAttribute("aria-valuenow", progress);

  questionCounter.textContent = `Question ${currentQuestion + 1} of ${Questions.length}`;

  // load questions

  let html = `
    <div class="question-container">
      <h3 class="">${currentQuestion + 1}.  ${question.question}</h3>
    </div>
    <div class="">
  `;

  question.options.forEach((option, index) => {
    const letter = String.fromCharCode(65 + index);

    html += `
      <div class="answer-option" data-index=${index}>
        <div>${letter}</div>
        <div class="">${option}</div>
      </div>
    `;
  });

  quizBody.innerHTML = html;

  document
    .querySelectorAll(".answer-option")
    .forEach((option) => option.addEventListener("click", selectAnswer));

};

const selectAnswer = (e) => {

  const option = e.currentTarget;

  const index = parseInt(option.dataset.index);

  console.log('index' , index);
  

  // remove previous selection

  document
    .querySelectorAll(".answer-option")
    .forEach((option) => option.classList.remove("selected"));

  // add selection

  option.classList.add("selected");
  selectedAnswer = index;

  console.log('selectedAnswer' , selectedAnswer);
  
  nextBtn.disabled = false;
};

// next question

const nextQuestion = () => {

  if (selectedAnswer === null) return;

  const correct = Questions[currentQuestion].answer;

  const option = document.querySelectorAll(".answer-option");

  option.forEach((option) => {
    option.style.pointerEvents = "none";
  });

  console.log(correct);
  console.log(selectedAnswer);
  
  

  nextBtn.disabled = true;

  if (selectedAnswer === correct) {
    score++;
  }

  console.log('score' , score);
  
  option[correct].classList.add("correct");

  if (selectedAnswer !== correct) {
    option[selectedAnswer].classList.add("incorrect");
  }

  setTimeout(() => {
    if (currentQuestion >= Questions.length - 1) {
      showResult()
      return;
    }

    currentQuestion++;

    loadQuestion()

  }, 1000);
};

// Result

const showResult = () => {

  document.getElementById('quizContainer').classList.add('content-hide')

  quizBody.innerHTML = " ";
  quizFooter.classList.add('.content-hide')

  // result

  resultContainer.classList.remove('content-hide')

  const timeTaken = Math.floor((Date.now() - startTime) / 1000)

  const percentage = Math.floor((score / Questions.length) * 100) 

  console.log('timeTaken' , timeTaken);
  console.log('percentage' , percentage);

  document.getElementById('finalScore').textContent = percentage + '%';

  document.getElementById('correctCount').textContent = score;

  document.getElementById('incorrectCount').textContent = Questions.length - score

  document.getElementById('totalQuestions').textContent = Questions.length

  const minutes = Math.floor(timeTaken / 60)

  const seconds = timeTaken % 60;

  document.getElementById('timeTaken').textContent = `${minutes.toString().padStart(2 , '0')}:${seconds.toString().padStart(2 , '0')}` 

  let message = ""

  if(percentage >= 80){
    message = "Excellent Work."
  }else if(percentage >= 60){
    message = "Good Work."
  }else if(percentage >= 40){
    message = "Keep Practice!"
  }else{
    message = "Try Again."
  }

  document.getElementById('resultsMessage').textContent = message;


}

nextBtn.addEventListener('click' , nextQuestion)
restartBtn.addEventListener('click' , initQuizApp)

initQuizApp()
