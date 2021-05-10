//task 1

let city: string = "Kyiv";
city = "Lviv";
let address: string = city;
console.log(address);

//task 2

const someNumFromPrompt: unknown = prompt("Gimme a number");
let strLength: number = someNumFromPrompt as number;

strLength == 0
  ? console.log("0")
  : strLength % 2 === 0
  ? console.log("is Even")
  : console.log("is Odd");

//task3

function max(...args: number[]) {
  console.log(Math.max(...args));
}

max(5, -2);
max(5, -2, 30, 6);

//task4
const wordsContainerRef = document.querySelector(
  ".words-container"
) as HTMLElement;
const inputFieldRef = document.querySelector(
  "[name=input-field]"
) as HTMLInputElement;
const addButtonRef = document.querySelector("[name=add-btn]") as HTMLElement;
const removeButtonRef = document.querySelector(
  "[name=reset-btn]"
) as HTMLElement;
const textareaRef = document.querySelector(
  "[name=main-textarea]"
) as HTMLInputElement;
const cenzorBtnRef = document.querySelector("[name=cenzor]") as HTMLElement;
const resetButtonRef = document.querySelector(
  "[name=reset-btn]"
) as HTMLElement;

let newWord: string = "";
let bannedWords: string[] = [];
let textareaValue: string[] = [];

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
        textareaRef.value = textareaRef.value.replace(
          `${textareaValue[0][j]}`,
          "*".repeat(textareaValue[0][j].length)
        );
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
