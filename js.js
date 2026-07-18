
//this func will return 0,1,2
function getComputerChoice() {
    let a = Math.floor(Math.random() * 3);
    return a;
}

//this func returns user choice 0,1,2
function getHumanChoice() {
    let b = prompt("rock, paper, scissors: ");
    b = b.toLowerCase();
    let c;
    if (b == "rock")
        c = 0;
    else if (b == "paper")
        c = 1;
    else
        c = 2;
    return c;
}

//this func converts 0,1,2 to rock,paper and scissors
function conversion(convert) {
    if (convert == 0)
        return "rock";
    else if (convert == 1)
        return "paper";
    else
        return "scissors";
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    //scissors(2)=win , paper(1)=loss 
    //paper(1)=win , rock(0)=loss
    //rock(0)=win , scissors(2)=loss

    //funtion defined inside a function
    function playRound(humanChoice, computerChoice) {
        //stores rock paper and scissors
        let human = conversion(humanChoice);
        let comp = conversion(computerChoice);
        //displays converted choices
        console.log("you = ", human, "\tcomputer = ", comp);

        //game logic
        if (humanChoice == computerChoice) {
            console.log("draw");
        }
        //human=rock
        else if (humanChoice == 0) {
            //paper
            if (computerChoice == 1) {
                computerScore++;
                console.log("You lose! paper beats rock");
            }
            //scissors
            else {
                humanScore++;
                console.log("You won! rock beats scissors");
            }
        }
        //human=paper
        else if (humanChoice == 1) {
            //scissors
            if (computerChoice == 2) {
                computerScore++;
                console.log("You lose! scissors beats paper");
            }
            //rock
            else {
                humanScore++;
                console.log("You won! paper beats rock");
            }
        }
        //scissors
        else {
            //rock
            if (computerChoice == 0) {
                computerScore++;
                console.log("You lose! rock beats scissors");
            }
            //paper
            else {
                humanScore++;
                console.log("You won! scissors beats paper");
            }
        }
    }


    //play game 5 times
    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("your score = ", humanScore, "\tcomputer score = ", computerScore, "\n");
    }
    if (humanScore > computerScore)
        console.log("--- YOU WON ---");
    else if (humanScore < computerScore)
        console.log("--- YOU LOST ---");
    else
        console.log("--- GAME TIE ---");
}
playGame();