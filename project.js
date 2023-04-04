// 1. deposit some money
// 2. determine number of line to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again



// call the package prompt-sync
const prompt = require("prompt-sync") ();


// global variables
const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

// classes and functions
// step 1

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

const getBet = (balance, lines) => {
     //loop with condition true = forever looping
     while (true) {
        const bet = prompt("Enter the bet per line: ")
    
    // parseFloat => convert string to float number
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
        }
}

// step 4

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol)
        }

    }
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
}



 const transpose = (reels) => {
    const rows = [],

    for (let i = 0;  i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i])
        }

    }

    return rows
 }

 const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of rows.entries()) {
            rowString += symbol
            if (i != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
    }
 }
// use let because the balance changes everytime user plays
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);



 

 