const calculatorDisplayOutputElement = document.getElementById("calculator-display-output");
const calculatorInputElements = document.getElementsByClassName("calculator-input");

let calculatorInputs = Array.from(calculatorInputElements)

calculatorInputs.forEach((calculatorInput) => {
    // console.log(calculatorInput)
    calculatorInput.addEventListener("click", (event) => {

        if(event.target.innerText === "AC"){
            calculatorDisplayOutputElement.value = "";
        }
        else if(event.target.innerText === "DEL"){
            let calculatorOutput = calculatorDisplayOutputElement.value;
            calculatorDisplayOutputElement.value = calculatorOutput.substring(0, calculatorOutput.length-1);
        }
        else if(event.target.innerText === "="){
            if(calculatorDisplayOutputElement.value){
                calculatorDisplayOutputElement.value = eval(calculatorDisplayOutputElement.value);
            }
            else{
                calculatorDisplayOutputElement.value = ""
            }
        }
        else{
            calculatorDisplayOutputElement.value += event.target.innerText;
        }
    });
});

