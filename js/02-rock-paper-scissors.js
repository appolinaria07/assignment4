let choice, choiceComp, again;

do {
    choice = prompt("To play the game enter either rock, scissors or paper.");
while (choice !== "rock" && choice !== "scissors" && choice !== "paper") {
    choice = prompt("Please enter only either rock, scissors or paper.");
}

choiceComp = Math.floor(Math.random()*3);
if (choiceComp === 0) {
    choiceComp = "Rock";
} else if (choiceComp === 1) {
    choiceComp = "Scissors";
} else {
    choiceComp = "Paper";
}

if (choice === "rock") {
    if (choiceComp === "Rock") {
        again = prompt("There's a tie. Would you like to play another round? (y, n)");
    } else if (choiceComp === "Scissors") {
        again = prompt("You win. Would you like to play again? (y, n)");
    } else {
        again = prompt("You lose. Would you like to play again? (y, n) ");
    }
} else if (choice === "scissors") {
    if (choiceComp === "Rock") {
        again = prompt("You lose. Would you like to play again? (y, n)");
    } else if (choiceComp === "Scissors") {
        again = prompt("There's a tie. Would you like to play another round? (y, n)");
    } else {
        again = prompt("You win. Would you like to play again? (y, n) ");
    }
} else {
    if (choiceComp === "Rock") {
        again = prompt("You win. Would you like to play again? (y, n)");
    } else if (choiceComp === "Scissors") {
        again = prompt("You lose. Would you like to play again? (y, n)");
    } else {
        again = prompt("There's a tie. Would you like to play another round? (y, n) ");
    }
}
} while (again !== "n") {
    alert("Thank you for playing the game!");
}
