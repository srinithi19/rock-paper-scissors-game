let win = 0;
let lose = 0;
let tie = 0;

game();


function game() {
let choice = ["R","P","S"]
let userChoice = prompt("Enter R,P or S :");
userChoice = userChoice.toUpperCase();

while(!choice.includes(userChoice)) {
    userChoice = prompt("Enter R,P or S :");
}
alert("The user selected : " + userChoice);
let computerChoice = choice[Math.floor(Math.random() * choice.length)];//choice[0]
alert("Computer choice : " + computerChoice);
if (userChoice == computerChoice) {
    
    tie = tie + 1;
    alert("Its a tie \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

if (userChoice == "R" && computerChoice == "P"){
    lose = lose + 1;
    alert("you lose \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

if (userChoice == "R" && computerChoice == "S"){
    win = win + 1;
    alert("you win \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

if (userChoice == "P" && computerChoice == "R"){
    win = win + 1;
    alert("you win \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

if (userChoice == "P" && computerChoice == "S"){
    lose = lose + 1;
    alert("you lose \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

if (userChoice == "S" && computerChoice == "R"){
    lose = lose + 1;
    alert("you lose \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

if (userChoice == "S" && computerChoice == "P"){
    win = win + 1;
    alert("you lose \n" + "stats\nTie " + tie + "\nlose " + lose + "\nwin " + win);

}

let play = confirm("would you like to play again");
if(play){
    game();
} else {
    alert("The game is over");
}
}






