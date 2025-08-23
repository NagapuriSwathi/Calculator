# Calculator Application using HTML, CSS and JavaScript

## Technologies Used
- Hyper Text Markup Language
    - Input fields
    - Area or section to display output
- Cascsding Style Sheets (CSS) for styling
- JavaScript (Js) for functionality of Calculator

### index.html

``` html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is a Calcualtor Project" />
        <link rel="stylesheet" href="style.css">
        <title>JavaScript Projects | Calcualtor</title>
    </head>
    <body id="calculator-app">
        <main id="calculator">
            <h1 id="calculator-heading">Calculator</h1>
            <section id="calculator-application">
                <div id="calculator-display">
                    <input type="text" placeholder="" name="calculator-display-output" id="calculator-display-output" class="calculator-input-output" disabled="true"/>
                </div>
                <div id="calculator-input-buttons">
                    <button type="button" id="allClear" class="calculator-input calculator-input-output">AC</button>
                    <button type="button" id="delete" class="calculator-input calculator-input-output">DEL</button>
                    <button type="button" id="plus" class="calculator-input calculator-input-output">+</button>

                    <button type="button" id="one" class="calculator-input calculator-input-output">1</button>
                    <button type="button" id="two" class="calculator-input calculator-input-output">2</button>
                    <button type="button" id="three" class="calculator-input calculator-input-output">3</button>
                    <button type="button" id="minus" class="calculator-input calculator-input-output">-</button>

                    <button type="button" id="four" class="calculator-input calculator-input-output">4</button>
                    <button type="button" id="five" class="calculator-input calculator-input-output">5</button>
                    <button type="button" id="six" class="calculator-input calculator-input-output">6</button>
                    <button type="button" id="multiplication" class="calculator-input calculator-input-output">*</button>

                    <button type="button" id="seven" class="calculator-input calculator-input-output">7</button>
                    <button type="button" id="eight" class="calculator-input calculator-input-output">8</button>
                    <button type="button" id="nine" class="calculator-input calculator-input-output">9</button>
                    <button type="button" id="division" class="calculator-input calculator-input-output">/</button>

                    <button type="button" id="zero" class="calculator-input calculator-input-output">0</button>
                    <button type="button" id="dot" class="calculator-input calculator-input-output">.</button>
                    <button type="button" id="equal" class="calculator-input calculator-input-output">=</button>
                </div>
            </section>
        </main>

        <script src="./script.js"></script>
    </body>
    </html>
```

### style.css

```css
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 10px;
    }

    body{
        background-color: #222222;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    main{
        max-width: 40rem;
        margin: auto;
        padding-top: 3rem;
        height: 100vh;
    }

    #calculator-heading{
        color: #FFFFFF;
        text-align: center;
        font-size: 4rem;
        padding: 1rem 0;
        margin-bottom: 1rem;
        border-bottom: 0.2rem groove #FFFFFF;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    #calculator-application{
        width: 100%;
        box-shadow: 0rem 0rem 0.2rem 0.4rem #FFFFFF inset;
        border-radius: 0.1rem;
    }

    .calculator-input-output{
        outline: none;
        border: 0.2rem ridge #222222;
        box-shadow: 0rem 0rem 0.2rem 0.4rem #FFFFFF inset;
        color: #D92121;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    #calculator-display input{   
        width: 100%;
        padding: 1.2rem;
        text-align: right;
        font-size: 6rem;
        font-weight: 900;
        border-bottom: none;
        background-color: #222222;
        color: #cdd921;
    }

    #calculator-input-buttons{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, minmax(2rem, 1fr));
    }

    button#allClear{
        grid-column: 1/3;
    }

    button#equal{
        grid-column: 3/5;
    }

    #calculator-input-buttons button{
        padding: 2rem;
        font-size: 1.8rem;
        font-weight: 900;
        box-shadow: 0rem 0rem 0.2rem 0.6rem #222222 inset;
    }
```

### script.js

```js
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
```