const calculatorDisplayOutputElement = document.getElementById("calculator-display-output");
const calculatorInputElements = document.getElementsByClassName("calculator-input");

let calculatorInputs = Array.from(calculatorInputElements)

calculatorInputs.forEach((calculatorInput) => {
    try{
        calculatorInput.addEventListener("click", (event) => {
            calculatorDisplayOutputElement.style.backgroundColor = "#3D5F07";
            calculatorDisplayOutputElement.style.color = "#FFFFFF";

            if(event.target.innerText === "AC"){
                calculatorDisplayOutputElement.value = "";
                calculatorDisplayOutputElement.style.backgroundColor = "";
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
                    calculatorDisplayOutputElement.value = "";
                }
            }
            else{
                calculatorDisplayOutputElement.value += event.target.innerText;
            }
        });
    }
    catch (error) {
        console.log(error);
        calculatorDisplayOutputElement.value = " ";
    }
});

