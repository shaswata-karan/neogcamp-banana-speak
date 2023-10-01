var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

console.log(textInput)

function clickHandler() {
    outputDiv.innerText = "shshshshs " + textInput.value
};

buttonTranslate.addEventListener("click", clickHandler);