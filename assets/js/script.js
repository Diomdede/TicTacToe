// Define globally used elements
let factionSelectElement = document.getElementById("faction");
let factionMottoElement = document.getElementById("faction_motto");
let hrElement = document.getElementsByTagName("hr");
let backgroundImageElement = document.getElementById("game-background-image");
// Default settings for new quizes
const quizFactions = {
    "imperium" : ["#c9c190", "linear-gradient(to bottom,  #d5cea6 0%,#c9c190 40%,#b7ad70 100%)"],
    "chaos" : ["#7E3848", "linear-gradient(to bottom,  #a5465c 0%,#7E3848 40%,#7a2a3d 100%)"]
}
;
let currentDifficulty = "easy"; // default difficulty
let currentFaction = "imperium"; // default faction

// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event){
    generateContent();
});

/// Functions

// * Generates a new quiz for the user
function generateNewQuiz(){
    // Users current score(s)
    var questionScore = {
        totalQuestions : 10, // Total amount of questions in the quiz
        currentQuestion: 0, // Current question the user is on
        totalAnswered : 0, // Total amount of questions the user has answered
    };
    // Hide all our select elements & show quiz elements
    document.getElementsByClassName("game-selection")[0].style.visibility = "hidden"
    document.getElementsByClassName("game-values-content")[0].style.visibility = "visible"
    factionMottoElement.style.visibility = "hidden"
}
// * Generates the quiz (for when the website loads!)
function generateContent(){
    // Play background theme!
    var audio = new Audio("/assets/audio/chaos_theme.mp3");
    if (audio){
        audio.play();
    }
    // Generate factions from faction list & force style selection element
    backgroundImageElement.style.backgroundImage = `url("/assets/images/${currentFaction}.jpg")`;
    factionSelectElement.style.backgroundColor = quizFactions[currentFaction][0];
    factionSelectElement.style.color = "white";
    var factionHTML = ``;
    for (var i in quizFactions){
        var newFaction = `
        <option style="color:white;background-color:${quizFactions[i][0]}" value=${i.toLowerCase()}>${i.toUpperCase()}</option>
        `;
        factionHTML += newFaction;
    }
    factionSelectElement.innerHTML = factionHTML;
}

// Listeners //

// * Attach a change listener event to faction selection
factionSelectElement.addEventListener("change", function() {
    currentFaction = this.value.toLowerCase();
    factionSelectElement.style.backgroundColor = quizFactions[currentFaction][0];
    backgroundImageElement.style.backgroundImage = `url("/assets/images/${this.value.toLowerCase()}.jpg")`;
    var faction_elements = document.getElementsByClassName("faction_color");
    // Iterate all hrs
    for (var hr of hrElement) {
        hr.style.background = quizFactions[currentFaction][1]
    }
    // Iterate all faction elements
    for (var faction_element of faction_elements) {
        faction_element.style.background = quizFactions[currentFaction][1]
    }
    switch (currentFaction) {
        case "imperium":
            factionMottoElement.textContent = "PREPARE FOR DEPLOYMENT, BROTHER."
            break;
        case "chaos":
            factionMottoElement.textContent = "BLOOD FOR THE BLOOD GOD!"
            break;     
    }
});