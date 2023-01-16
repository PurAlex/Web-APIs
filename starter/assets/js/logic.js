// DOM elements
var startQuiz = document.querySelector("#start");
var timer = document.querySelector("#time");
var questionsEl = document.querySelector("#questions")
var choicesEl = document.getElementById("choices");

var secondsLeft = 75;
var currentQuestionIndex = 0;

// When Start Quiz button is clicked, questions load and timer is on.
startQuiz.addEventListener("click", function () {
    // hide start-screen 
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    //change class "hide" to "visible"
    document.getElementById("questions").className = "visible";

    // Run startTime function
    startTime();
    // Run showQuestions function
    showQuestions();


});


function showQuestions() {
    var currentQuestion = myQuestions[currentQuestionIndex];
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.question;

    // choices.innerHTML = "";

    currentQuestion.choices.forEach(function (choice, i) {
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = i + 1 + ". " + choice;
        // choiceButton.onclick = questionClick;

        choicesEl.appendChild(choiceButton);


    })
}








// Start time and end the questions when secondsLeft = 0. When secondsLeft = 0 display scores.
function startTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function of scores
            scores();
        }
    }, 1000);
};