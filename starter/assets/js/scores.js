// Function to get the save items of the localStorage
function scores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sort the scores by alphabet
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        // Created li tag for each score
        var li = document.createElement("li");
        li.textContent = score.initials + " - " + score.score;

        // Append li to ol highscores
        var ol = document.getElementById("highscores");
        ol.appendChild(li);
    });
}

// Function to clear the scores when user click the button
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

// call the button when clicked
document.getElementById("clear").onclick = clearHighscores;

// When page is load show the scores
scores();
