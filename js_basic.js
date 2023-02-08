greetFuncDel();
let variableName = "ebere";
let variable_Name_1 = "a";
variableName = "something else";

const varName = "const string";

const isCorrect = true;
const isNotCorrect = false;

const age = 40;
const weight = 40.36374774474747;
const negativeNumber = -4748838.8989;

const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7];
const arrayOfString = ["1", "2"];
const arrayOfStringAndNumbers = ["1", "2", 4];
const arrayOfArray = [
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
  [1, 2, 3, 4, 5, 6, 7],
];

const obj = {
  name: "Ebere",
  age: 485,
};

//filter, map, find
const filteredArray = arrayOfNumber.filter(function (number) {
  return number == 2;
});

console.log(filteredArray);

const mapArray = arrayOfNumber.map(function (number) {
  if (number == 2) {
    return number;
  }
});

console.log(mapArray);

const findValue = arrayOfNumber.find(function (number) {
  return number == 2;
});

console.log(findValue);

let greetFuncExp = function () {
  console.log("greet Func");
};
greetFuncExp();

function greetFuncDel() {
  console.log("greet Func Del");
}

// (function () {
//   console.log("IIFE");
//   return {};
// })();

function greetFuncDel2() {
  return function () {
    return {};
  };
}
const x = greetFuncDel2();
console.log(x());

console.log(greetFuncDel2()());
