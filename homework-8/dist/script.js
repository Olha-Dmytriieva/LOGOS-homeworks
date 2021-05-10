//task 1
let city = "Kyiv";
city = "Lviv";
let address = city;
console.log(address);
//task 2
const someNumFromPrompt = prompt("Gimme a number");
let strLength = someNumFromPrompt;
strLength == 0
    ? console.log("0")
    : strLength % 2 === 0
        ? console.log("is Even")
        : console.log("is Odd");
//task3
function max(...args) {
    console.log(Math.max(...args));
}
max(5, -2);
max(5, -2, 30, 6);
//task4
const wordsContainerRef = document.querySelector(".words-container");
const inputFieldRef = document.querySelector("[name=input-field]");
const addButtonRef = document.querySelector("[name=add-btn]");
const removeButtonRef = document.querySelector("[name=reset-btn]");
const textareaRef = document.querySelector("[name=main-textarea]");
const cenzorBtnRef = document.querySelector("[name=cenzor]");
const resetButtonRef = document.querySelector("[name=reset-btn]");
let newWord = "";
let bannedWords = [];
let textareaValue = [];
inputFieldRef.addEventListener("change", inputFieldHandler);
addButtonRef.addEventListener("click", addButtonHandler);
textareaRef.addEventListener("change", textareaHandler);
cenzorBtnRef.addEventListener("click", cenzorBtnHandler);
resetButtonRef.addEventListener("click", resetButtonHandler);
function inputFieldHandler(e) {
    newWord = e.target.value.toLowerCase();
}
function addButtonHandler(e) {
    if (e) {
        bannedWords.push(newWord);
        wordsContainerRef.innerHTML += newWord + "\n";
        newWord = "";
    }
    return bannedWords;
}
function textareaHandler(e) {
    textareaValue.push(e.target.value.toLowerCase().split(" "));
}
function cenzorBtnHandler(e) {
    for (let i = 0; i < bannedWords.length; i += 1) {
        for (let j = 0; j < textareaValue[0].length; j += 1) {
            if (bannedWords[i] === textareaValue[0][j]) {
                textareaRef.value = textareaRef.value.replace(`${textareaValue[0][j]}`, "*".repeat(textareaValue[0][j].length));
            }
        }
    }
}
function resetButtonHandler(e) {
    console.dir(wordsContainerRef);
    if (e) {
        wordsContainerRef.innerHTML = "Bad words:";
    }
}
