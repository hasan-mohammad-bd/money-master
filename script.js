//input value
function getInput(inputNumber){
    let theInput = document.getElementById(inputNumber);
    let inputText = theInput.value;
    let inputValue = parseFloat(inputText);
    theInput.value = "";
    return inputValue;    
}

//innerText
function textField(textField, inputValue, amount){
    let theField = document.getElementById(textField);
    let totalValue = inputValue - amount;
    theField.innerText = totalValue;
    return theField.innerText;
    
}
//percentage of income
function calPercentage(inputValue, percentage){
    let thePercentage = (inputValue / 100)* percentage;
    return thePercentage;

}

//error message
document.getElementById("alert-msg1").style.display = "none";
document.getElementById("alert-msg2").style.display = "none";
document.getElementById("alert-msg3").style.display = "none";
document.getElementById("alert-msg4").style.display = "none";
document.getElementById("alert-msg5").style.display = "none";
//calculate button function
document.getElementById("cal-btn").addEventListener("click", function(){
    let incomeInput = getInput("income-input");
    //error catching
    if(incomeInput > 0){
        document.getElementById("alert-msg1").style.display = "none"
        document.getElementById("total-income").innerText = incomeInput;
        let foodInput = getInput("food-expense-input");       
        let rentInput = getInput("rent-expense-input");
        let clothesInput = getInput("clothes-expense-input");
        //error catching
        if(foodInput > 0 && rentInput > 0 && clothesInput > 0 ){
            document.getElementById("alert-msg2").style.display = "none";
            let totalExpense = foodInput + rentInput + clothesInput;
            //error catching
            if(totalExpense < incomeInput){
                document.getElementById("alert-msg3").style.display = "none";
                document.getElementById("total-expense").innerText = totalExpense;
                let remainingBalance = textField("total-balance",incomeInput,totalExpense);
            } else {
                document.getElementById("alert-msg3").style.display = "block";
            }

        } else {
            document.getElementById("alert-msg2").style.display = "block";
        }

    }
    else{
        document.getElementById("alert-msg1").style.display = "block";
    }

})

//save button function
document.getElementById("save-btn").addEventListener("click", function(){
    let totalIncome = document.getElementById("total-income").innerText;
    let totalIncomeValue = parseFloat(totalIncome);
    let percentageInput = getInput("save-input");
    //error catching
    if(percentageInput > 0 ){
        document.getElementById("alert-msg4").style.display = "none";
        let calculatePercentage = calPercentage(totalIncomeValue, percentageInput);
        let totalBalance = document.getElementById("total-balance").innerText;
        //error catching
        if(calculatePercentage < totalBalance) { 
            document.getElementById("saving-amount").innerText = calculatePercentage;
            document.getElementById("alert-msg5").style.display = "none";
            let totalBalanceAfterSaving = totalBalance - calculatePercentage;
            document.getElementById("remaining-balance").innerText = totalBalanceAfterSaving;
        } else {
            document.getElementById("alert-msg5").style.display = "block";
        }

    } else {
        document.getElementById("alert-msg4").style.display = "block";
    }

})