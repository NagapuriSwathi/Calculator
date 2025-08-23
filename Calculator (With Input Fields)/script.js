var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var addition = document.getElementById("Addition");
var subtraction = document.getElementById("Subtraction");
var multiplication = document.getElementById("Multiplication");
var division = document.getElementById("Division");
var calculationResult = document.getElementById("calculation-result");


function calculate(){
    var num1 = parseInt(number1.value);
    var num2 = parseInt(number2.value);

    if((number1.value!="") && (number2.value!="")){
        calculationResult.style.display = "block";
        if(addition.checked){
            calculationResult.innerHTML =  num1+num2;
        }
        else if(subtraction.checked){
            calculationResult.innerHTML =  num1-num2;
        }
        else if(multiplication.checked){
            calculationResult.innerHTML =  num1*num2;
        }
        else if(division.checked){
            if(num2!==0){
                calculationResult.innerHTML =  num1/num2;
            }
            else{
                calculationResult.innerHTML =  "Please Enter valid inputs";
            }
        }
        else{
            calculationResult.innerHTML = "Please Enter valid inputs";
        }
    }
    else{
        calculationResult.style.display = "block";
        calculationResult.innerHTML = "Please Enter valid inputs";
    }
}






