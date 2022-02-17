//get input value
function getInput(inputNumber){
    let theInput = document.getElementById(inputNumber);
    let inputText = theInput.value;
    let inputValue = parseFloat(inputText);
    theInput.value = "";
    return inputValue;       
}

function textField(textField, isAdd, inputValue, amount){
    let theField = document.getElementById(textField);
    let theFieldText = theField.innerText;
    let previousValue = parseFloat(theFieldText);
    if(isAdd == true){
        let totalValue = previousValue + amount;
        theField.innerText = totalValue;
        return theField.innerText
    }
    else if (isAdd == false){
        let totalValue = inputValue - amount;
        theField.innerText = totalValue;
        return theField.innerText;
    }
}

function calPercentage(inputValue, percentage){
    let thePercentage = (inputValue / 100)* percentage;
    return thePercentage;

}




//calculate button function

document.getElementById("cal-btn").addEventListener("click", function(){
    let incomeInput = getInput("income-input");
    document.getElementById("total-income").innerText = incomeInput;
    let foodInput = getInput("food-expense-input");
    let rentInput = getInput("rent-expense-input");
    let clothesInput = getInput("clothes-expense-input");
    let totalExpense = foodInput + rentInput + clothesInput;
    document.getElementById("total-expense").innerText = totalExpense;
    let remainingBalance = textField("total-balance",false,incomeInput,totalExpense)
})

//save button function
document.getElementById("save-btn").addEventListener("click", function(){
    let totalIncome = document.getElementById("total-income").innerText;
    let totalIncomeValue = parseFloat(totalIncome);
    let percentageInput = getInput("save-input");
    let calculatePercentage = calPercentage(totalIncomeValue, percentageInput);
    document.getElementById("saving-amount").innerText = calculatePercentage;
    let totalBalance = document.getElementById("total-balance").innerText;
    let totalBalanceAfterSaving = totalBalance - calculatePercentage;
    document.getElementById("remaining-balance").innerText = totalBalanceAfterSaving;
})