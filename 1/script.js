const choices = ['Rock', 'Paper', 'Scissors'];

// genetate computer Choice
function getComputerChoice () {
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Game function
function play(userChoice) {
    let conputerChoice = getComputerChoice();

    if(userChoice === conputerChoice){
        result = "Draw";
    }
    else if(
        (userChoice === 'Rock' && conputerChoice === 'Scissors') ||
        (userChoice === 'Paper' && conputerChoice === 'Stone') ||
        (userChoice === 'Scissors' && conputerChoice === 'Paper')
    ){
        result ="You Win!";
    }
    else {
        result = "You Loss!"
    }

    document.getElementById("result").innerText =  `You chose ${userChoice}, Computer Chose ${conputerChoice} and Result is ${result}`
}