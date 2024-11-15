let buttonInput = document.querySelectorAll(".intBtn");  
let operatorButtons = document.querySelectorAll(".operator-holder button:not(#equals)");  
let equalsButton = document.getElementById("equals");  
let clearButton = document.getElementById("clear");  
let firstIntDisplay = document.getElementById("integerHolder");
let operatorDisplay = document.getElementById("operatorHolder");
let secondIntDisplay = document.getElementById("secondInt");

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let isSecondNumber = false;

buttonInput.forEach(button => {
    button.addEventListener("click", () => {
        let btnUserInput = button.innerHTML;

        if (!isSecondNumber) {
            firstNumber += btnUserInput;
            firstIntDisplay.innerHTML = firstNumber;
        } else {
            secondNumber += btnUserInput;
            secondIntDisplay.innerHTML = secondNumber;
        }
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (firstNumber && !isSecondNumber) {
            currentOperator = button.innerHTML;
            operatorDisplay.innerHTML = currentOperator;
            isSecondNumber = true;
        }
    });
});

equalsButton.addEventListener("click", () => {
    if (firstNumber && secondNumber && currentOperator) {
        performCalculation();
    }
});

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
    isSecondNumber = false;
    firstIntDisplay.innerHTML = "";
    operatorDisplay.innerHTML = "";
    secondIntDisplay.innerHTML = "";
});

function performCalculation() {
    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result;

    switch (currentOperator) {
        case "+":
            result = addition(num1, num2);
            break;
        case "-":
            result = subtraction(num1, num2);
            break;
        case "*":
            result = multiplication(num1, num2);
            break;
        case "/":
            result = division(num1, num2);
            break;
    }

    firstIntDisplay.innerHTML = result;
    operatorDisplay.innerHTML = "";
    secondIntDisplay.innerHTML = "";
    firstNumber = result.toString();
    secondNumber = "";
    currentOperator = null;
    isSecondNumber = false;
}

function addition(firstInt, secondInt) {
    let additionResult = firstInt + secondInt;
    return additionResult;
}

function subtraction(firstInt, secondInt) {  
    let subResult = firstInt - secondInt;
    return subResult;
}

function multiplication(firstInt, secondInt) {
    let mulResult = firstInt * secondInt;
    return mulResult;
}

function division(firstInt, secondInt) {
    if (secondInt === 0) {
        return alert("Error: Cannot Divide by zero");  
    }
    let divisionResult = firstInt / secondInt;
    return divisionResult;
}
