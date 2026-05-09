/*
    Cozy Calculator
    WEB 114 Final Project

    This is a simple calculator that uses javascript. By manipulating the DOM with javascript I can change the content. Using the Built in objects I was able to make a simple calculator.
*/

// Selects the calculator display from the HTML
const display = document.getElementById("display");

// Selects all number buttons
const numberButtons = document.querySelectorAll(".number");

// Selects all operator buttons
const operatorButtons = document.querySelectorAll(".operator");

// Selects specific buttons
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");

// Variables used to store calculator values
let currentNumber = "";
let previousNumber = "";
let operator = "";


/*
    Adds clicked numbers to the display
*/
function appendNumber(number) {

    currentNumber += number;

    display.value = currentNumber;
}


/*
    Stores the operator and first number
*/
function chooseOperator(selectedOperator) {

    operator = selectedOperator;

    previousNumber = currentNumber;

    currentNumber = "";
}


/*
    Performs the math calculation
*/
function calculateResult() {

    // Converts strings into real numbers
    let firstNumber = parseFloat(previousNumber);
    let secondNumber = parseFloat(currentNumber);

    let result = 0;

    // Addition calculation
    if (operator === "+") {

        result = firstNumber + secondNumber;

    }

    // Subtraction calculation
    else if (operator === "-") {

        result = firstNumber - secondNumber;

    }

   
    result = result.toFixed(2);

    // Updates display
    display.value = result;

    // Saves result for future calculations
    currentNumber = result;
}


/*
    Clears calculator values
*/
function clearCalculator() {

    currentNumber = "";
    previousNumber = "";
    operator = "";

    display.value = "";
}


/*
    Event listener for number buttons
*/
numberButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        appendNumber(button.textContent);

    });

});


/*
    Event listener for operator buttons
*/
operatorButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        chooseOperator(button.textContent);

    });

});


/*
    Event listener for equals button
*/
equalsButton.addEventListener("click", function() {

    calculateResult();

});


/*
    Event listener for clear button
*/
clearButton.addEventListener("click", function() {

    clearCalculator();

});


/*
    Event listener for decimal button
*/
decimalButton.addEventListener("click", function() {

    // Prevents multiple decimals
    if (!currentNumber.includes(".")) {

        currentNumber += ".";

        display.value = currentNumber;

    }

});