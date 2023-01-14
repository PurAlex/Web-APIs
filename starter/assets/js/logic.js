console.log("logic");

var startQuiz = document.querySelector("#start");
var timer = document.querySelector("#time");
var startedScreen = document.querySelector("#start-screen");


var questionsEl = document.querySelector("#question-title");


var secondsLeft = 75;

// When Start Quiz button is clicked, questions load and timer is on.
startQuiz.addEventListener("click", function () {
    for (var i = 0; i < myQuestions.length; i++) {
        // console.log(myQuestions[i].question);
        startedScreen.textContent = "";

        //change class "hide" to "visible"
        document.getElementById("questions").className = "visible";
        // questionsEl.textContent = myQuestions; 







    };

    startTime();


});


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