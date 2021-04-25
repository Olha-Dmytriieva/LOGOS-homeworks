//Classes task 1

class Worker {
  constructor(options) {
    this.name = options.name;
    this.lastName = options.lastName;
    this.dayRate = options.dayRate;
    this.workingDays = options.workingDays;
  }

  getSalary() {
    console.log(
      `${this.name} ${this.lastName}'s salary is `,
      this.dayRate * this.workingDays
    );
  }
}

// Example usage:
let worker1 = new Worker({
  name: "John",
  lastName: "Johnson",
  dayRate: 20,
  workingDays: 23,
});
console.log(worker1.name);
console.log(worker1.lastName);
console.log(worker1.workingDays);
worker1.getSalary();

let worker2 = new Worker({
  name: "Tom",
  lastName: "Tomson",
  dayRate: 48,
  workingDays: 18,
});
console.log(worker2.name);
console.log(worker2.lastName);
console.log(worker2.workingDays);
worker2.getSalary();

//Classes task 2

class MyString {
  constructor(param) {
    this.param = param;
  }
  reverse(l) {
    console.log([...l].reverse().join(""));
  }

  ucFirst(j) {
    console.log(j.charAt(0).toUpperCase() + j.slice(1));
  }

  ucWords(m) {
    m.split(" ").forEach((element) => {
      console.log(
        element.charAt(0).toUpperCase() + element.slice(1).toString()
      );
    });
  }
}

const str = new MyString();

str.reverse("IVAN");
str.ucFirst("arsenal");
str.ucWords("life is beatiful");





//homework proto

function CoffeMake() {}
CoffeMake.prototype.on = function () {
  console.log("Coffee maker is ON");
};

CoffeMake.prototype.off = function () {
  console.log("Coffee maker is OFF");
};

//1st type of coffee maker
function dripCoffeeMaker() {
  console.log("Morning coffee is ready");
}

dripCoffeeMaker.prototype = CoffeMake.prototype;
const dropCoffeeMaker = new dripCoffeeMaker();
dropCoffeeMaker.on();
dropCoffeeMaker.off();

//2nd type of coffee maker
function espressoCoffeeMaker() {
  console.log("Espresso is ready");
}

espressoCoffeeMaker.prototype = CoffeMake.prototype;
const espressoMaker = new espressoCoffeeMaker();
espressoMaker.on();
espressoMaker.off();

//3rd type of coffee maker
function bigCoffeeMachine() {
  console.log("Flat-white is ready");
}

bigCoffeeMachine.prototype = CoffeMake.prototype;
const coffeMachine = new bigCoffeeMachine();
coffeMachine.on();
coffeMachine.off();