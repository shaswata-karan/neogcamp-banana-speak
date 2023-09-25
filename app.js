var buttonTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")

console.log(textInput)

buttonTranslate.addEventListener("click", clickHandler)

function clickHandler() {
    console.log("clicked")
    console.log("input", textInput.value)
};