// Define globally used elements
let factionSelectElement = document.getElementById("faction")
// Default settings for new quizes
const quizFactions = {
    "chaos" : "#7E3848",
    "imperium" : "#847143"
}
let currentFaction = "Chaos"
// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event){
    generateContent()
});

// Generates a new quiz for the user
function generateNewQuiz(){
}
// Generates the quiz (for when the website loads!)
function generateContent(){
    // Play background theme!
    var audio = new Audio("/assets/audio/chaos_theme.mp3")
    if (audio){
        audio.play()
    }
    // Generate factions from faction list & force style selection element
    factionSelectElement.style.backgroundColor = quizFactions[currentFaction]
    factionSelectElement.style.color = "white"
    var factionHTML = ``
    for (var i in quizFactions){
        console.log(i)
        var newFaction = `
        <option style="color:white;background-color:${quizFactions[i]}" value=${i.toLowerCase()}>${i.toUpperCase()}</option>
        `
        factionHTML += newFaction
    }
    factionSelectElement.innerHTML = factionHTML
}

// Listeners
factionSelectElement.addEventListener("change", function() {
    currentFaction = this.value.toLowerCase()
    console.log(currentFaction)
    factionSelectElement.style.backgroundColor = quizFactions[currentFaction]
});

const questionScore = {
    totalQuestions : 10, // Total amount of questions in the quiz
    currentQuestion: 0, // Current question the user is on
    totalAnswered : 0, // Total amount of questions the user has answered
}