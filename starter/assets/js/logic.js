// DOM elements
var startQuiz = document.querySelector("#start");
var timer = document.querySelector("#time");
var questionsEl = document.querySelector("#questions")
var choicesEl = document.getElementById("choices");
var feedbackEl = document.querySelector("#feedback");
var initialsEl = document.querySelector("#initials");

var secondsLeft = 75;
var timerInterval;
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
        // Append button to choices
        choicesEl.appendChild(choiceButton);


    });
}

// Function when choice is clicked
function questionClick() {
    // If user choice is wrong
    if (this.value !== myQuestions[currentQuestionIndex].answer) {
        // Reduce time when user choice is wrong
        secondsLeft -= 10;
        // Display if wrong
        feedbackEl.textContent = "Wrong!";
    } else {
        // Display if correct
        feedbackEl.textContent = "Correct!";
    }

    // Set wrong and correct for 1 second to show, then hide until next choice.
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // Take user to the next question
    currentQuestionIndex++;
    // If no more questions, then show score 
    if (currentQuestionIndex === myQuestions.length) {
        timer.textContent = secondsLeft;
        scores();
        // If there are more questions left then show nex question
    } else {
        showQuestions();
    }
}

// Function to show the final score
function scores() {
    // Stops timer
    clearInterval(timerInterval);
    // Hide questions
    document.getElementById("questions").className = "hide";
    // Display end screen
    var endScreen = document.getElementById("end-screen").className = "visible";
    // Show the final score
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = secondsLeft;


}

// Start time and end the questions when secondsLeft = 0. When secondsLeft = 0 display scores.
function startTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Calls function of scores
            clearInterval(timerInterval);
            scores();
        }
    }, 1000);
}

// Function to save the scores of the users on the localStorage
function saveScores() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        var scoreSaved = JSON.parse(window.localStorage.getItem("highscores")) || [];
        // Add new score for a user
        var addScore = {
            score: secondsLeft,
            initials: initials
        };

        // Save new score to localStorage
        scoreSaved.push(addScore);
        window.localStorage.setItem("highscores", JSON.stringify(scoreSaved));

        // Direct the page to highscores
        window.location.href = "./starter/highscores.html";
    }

}

// Function to check when the user type something
function checkUserInput(event) {
    // If user type then call saveScores funtion
    if (event.key === "Enter") {
        saveScores();
    }
}

// When submit is click call saveScores function
var startButton = document.querySelector("#submit");
startButton.onclick = saveScores;

