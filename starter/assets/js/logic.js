console.log("logic");

var startQuiz = document.querySelector("#start");
var timer = document.querySelector("#time");
var startedScreen = document.querySelector("#start-screen");


var choices = document.querySelector(".choices");

// ordered list created
var choicesList = document.createElement("ol");
choices.appendChild(choicesList);

// button created 
var choices1Button = document.createElement("button");
var choices2Button = document.createElement("button");
var choices3Button = document.createElement("button");
var choices4Button = document.createElement("button");

// choices button append to list items
choicesList.appendChild(choices1Button);
choicesList.appendChild(choices2Button);
choicesList.appendChild(choices3Button);
choicesList.appendChild(choices4Button);

var userChoice;

var secondsLeft = 75;


// When Start Quiz button is clicked, questions load and timer is on.
startQuiz.addEventListener("click", function () {

    startedScreen.textContent = "";
    //change class "hide" to "visible"
    document.getElementById("questions").className = "visible";

    // Run showQuestions function
    showQuestions();
    // Run startTime function
    startTime();

});

function showQuestions() {
    for (var i = 0; i < myQuestions.length; i++) {
        var questionTitle = document.getElementById("question-title");
        questionTitle.textContent = myQuestions[0].question;

        // Displaying answers as buttons to be clicked
        choices1Button.textContent = myQuestions[0].answers[0];
        choices2Button.textContent = myQuestions[0].answers[1];
        choices3Button.textContent = myQuestions[0].answers[2];
        choices4Button.textContent = myQuestions[0].answers[3];



        // if (userChoice == myQuestions[0].correctAnswer) {
        //     console.log("good");
        // } else if (choices1Button === myQuestions[0].answers[0]) {
        //     console.log("nose");
        // }
    }
};

// button on click 
choices1Button.addEventListener("click", function () {
    if (userChoice === myQuestions[0].correctAnswer[0]) {
        console.log("incorret");
    }
})

choices2Button.addEventListener("click", function () {
    if (userChoice === myQuestions[0].correctAnswer[0]) {
        console.log("correct");
    }
})

choices3Button.addEventListener("click", function () {
    console.log("hello");
})

choices4Button.addEventListener("click", function () {
    console.log("hello");
})



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