$(document).ready(function() {

// Wins/losses
var winCount = document.getElementById("win-count");
var lossCount = document.getElementById("loss-count");

// Use math.random to generate random number (between 19 and 120)
var randomNumber = Math.floor(Math.random() * 120) + 19;
var userScore = document.getElementById("user-Score");
document.getElementById("random-number").innerHTML = randomNumber;

$("random-number").text(randomNumber);

// Use math.random to give each crystal a value (between 1 and 12)
function createRandomNum(){
    return Math.floor(Math.random() * 12) +1; 
    }

// Crystals 
var totalCount = 0;
var pinkgem = createRandomNum();
var goldgem = createRandomNum();
var purplegem = createRandomNum();
var whitegem = createRandomNum();

// Create on-click functions to link values to crystal images when clicked
// Pink gem
$("#pinkgem").on("click", function(){
    totalCount += pinkgem
    document.getElementById("user-score").innerHTML = totalCount;
    totalDisplay();
    checkGameOver();
    
});
// Gold gem
$("#goldgem").on("click", function(){
    totalCount += goldgem
    document.getElementById("user-score").innerHTML = totalCount;
    totalDisplay();
    checkGameOver();
    
});
// Purple gem
$("#purplegem").on("click", function(){
    totalCount += purplegem
    document.getElementById("user-score").innerHTML = totalCount;
    totalDisplay();
    checkGameOver();
    
});
// White gem
$("#whitegem").on("click", function(){
    totalCount += whitegem
    document.getElementById("user-score").innerHTML = totalCount;
    totalDisplay();
    checkGameOver();

}); 
// Display starting score (0) and then random number in console
console.log(totalCount);
console.log(randomNumber);

// Display user score in "your score" area
function totalDisplay(){
    document.getElementById("user-score").innerHTML = totalCount;

}

// Function to reset game/generate new random number & crystal values
function gameReset(){
    randNum = Math.floor(Math.random() * 120) + 19;
    document.getElementById("random-number").innerHTML = randomNumber;
    totalCount=0;
    totalDisplay();
    pinkgem = createRandomNum();
    goldgem = createRandomNum();
    purplegem = createRandomNum();
    whitegem = createRandomNum();
    
}

// Check user score to end game. Verify win/loss and update wins/losses area
function checkGameOver(){
if (totalCount === randomNumber) {
    //If win, add 1 to win count
    winCount.textContent++;
    console.log(totalCount);
    // If win, alert user
    alert("Yay! You Win!")
    // If win, restart game
    gameReset();

}

else if (totalCount > randomNumber) {
    // if loss, add 1 to loss count
    lossCount.textContent++;
    //Display end score in console
    console.log(totalCount);
    // If loss, alert user
    alert("Sorry, You lose! Try again!")
    // If loss, restart game
    gameReset();
        
}
};
});