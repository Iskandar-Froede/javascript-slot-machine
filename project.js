// 1. deposit some money
// 2. determine number of line to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

// step 1

// call the package prompt-sync
const prompt = require("prompt-sync") ();

// function deposit
const deposit = () => {

    //loop with condition true = forever looping
    while (true) {
    const depositAmount = prompt("Enter a deposit amount: ")

// parseFloat => convert string to float number
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <=0) {
        console.log("Invalid deposit amount, try again.");
    } else {
        return numberDepositAmount;
    }
    }
}

// step 2

const getNumberOfLines = () => {
     //loop with condition true = forever looping
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
    
    // parseFloat => convert string to float number
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
        }
}

// step 3

const collectBetAmount = () => {
    
}

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();

 