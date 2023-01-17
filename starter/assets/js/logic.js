// DOM elements
var startQuiz = document.querySelector("#start");
var timer = document.querySelector("#time");
var questionsEl = document.querySelector("#questions")
var choicesEl = document.getElementById("choices");
var feedbackEl = document.querySelector("#feedback");

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

// Function to show the questions and choices
function showQuestions() {
    // Add to a new var the current question
    var currentQuestion = myQuestions[currentQuestionIndex];

    // Display the current question
    var questionTitle = document.getElementById("question-title");
    questionTitle.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

    // Loop over all the choices
    currentQuestion.choices.forEach(function (choice, i) {
        // Button created for each choice
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);

        choiceButton.textContent = i + 1 + ". " + choice;
        // Add questionClick function to each choiceButton
        choiceButton.onclick = questionClick;

        choicesEl.appendChild(choiceButton);


    });
}


function questionClick() {
    // If user choice is wrong
    if (this.value !== myQuestions[currentQuestionIndex].answer) {
        // Reduce time when user choice is wrong
        secondsLeft -= 10;

        // if (secondsLeft < 0) {
        //     secondsLeft = 0;
        // }

        // feedbackEl.textContent = "Wrong!";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex === myQuestions.length) {
        endQuiz();
    } else {
        showQuestions();
    }
}


function endQuiz() {

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