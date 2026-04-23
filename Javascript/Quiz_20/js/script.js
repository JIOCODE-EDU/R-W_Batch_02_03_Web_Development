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
let startTime;
let selectedAnswer = null;
let score = 0;
let timerInterval;

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
  let startTime;
  let selectedAnswer = null;
  let score = 0;
  let timerInterval;

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
      <div class="answer-option">
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

  // remove previous selection

  document
    .querySelectorAll(".answer-option")
    .forEach((option) => option.classList.remove("selected"));

  // add selection

  option.classList.add("selected");
  selectedAnswer = index;
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

  nextBtn.disabled = true;

  if (selectedAnswer === correct) {
    score++;
  }

  option[correct].classList.add("correct");

  // if (selectedAnswer !== correct) {
  //   option[selectedAnswer].classList.add("incorrect");
  // }

  setTimeout(() => {
    if (currentQuestion >= Questions.length - 1) {
      showResult()
      return;
    }

    currentQuestion++;

    loadQuestion()

  }, 1000);
};


const showResult = () => {
  
}

nextBtn.addEventListener('click' , nextQuestion)
restartBtn.addEventListener('click' , initQuizApp)

initQuizApp()
