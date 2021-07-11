// Define globally used elements
let factionSelectElement = document.getElementById("faction")
// Default settings for new quizes
const quizFactions = {
    "chaos" : "#7E3848",
    "imperium" : "#847143"
}
let onGoingQuiz = false
let currentDifficulty = "easy"
let currentFaction = "chaos"
let currentSettings = {
    music : true,
    sound : true
}
// Wait for document to load
document.addEventListener("DOMContentLoaded", function(event){
    generateContent()
});

// Generates a new quiz for the user
function generateNewQuiz(){
    // Users current score(s)
    var questionScore = {
        totalQuestions : 10, // Total amount of questions in the quiz
        currentQuestion: 0, // Current question the user is on
        totalAnswered : 0, // Total amount of questions the user has answered
    }
}
// Generates the quiz (for when the website loads!)
function generateContent(){
    // Play background theme!
    var audio = new Audio(false) ///assets/audio/chaos_theme.mp3
    if (audio){
        audio.play()
    }
    // Generate factions from faction list & force style selection element
    factionSelectElement.style.backgroundColor = quizFactions[currentFaction]
    factionSelectElement.style.color = "white"
    var factionHTML = ``
    for (var i in quizFactions){
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
    factionSelectElement.style.backgroundColor = quizFactions[currentFaction]
})

// * checkboxes
let checkboxes = document.querySelectorAll('input[type=checkbox]')
for (let i of checkboxes) {
    if (i.type == "checkbox") {
        i.addEventListener("change", function(){
            var setting = currentSettings[this.name]
            if (setting == true) {
                setting = this.value
                console.log("updated value in js")
            }
        })
    }
}