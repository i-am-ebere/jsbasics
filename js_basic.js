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

(function () {
  console.log("IIFE");
  return {};
})();

function greetFuncDel2() {
  return function () {
    return {};
  };
}
const x = greetFuncDel2();
console.log(x());

console.log(greetFuncDel2()());

function funcWithParam(x, y) {
  return x + y;
}

console.log(funcWithParam(1, 2));
//... spread operator
function funcWithUnlimitedParam(...x) {
  console.log(x);
}

funcWithUnlimitedParam(1, 2, { name: "ebere", age: "sage" }, "strings", 5);

//arrow function
const arrwFunc = () => {
  console.log("arrwFunc");
  return "something";
};
console.log("arrwFunc: ", arrwFunc());
const arrwFunc2 = () => ({ name: "ebere" });
console.log("arrwFunc2: ", arrwFunc2());
const obj = {
  name: "Ebere",
  age: 485,
  "str age": "103",
};
// const finds = "name";
// console.log(obj.name);
// console.log(obj["str age"]);
// console.log(obj[finds]); // bracket notation

const arrayA = [1, 2, 3, 4];
const arrayB = [1, 2, 3, 4, 5, 6, 7];
//concat with spread operator
// console.log([...arrayA, ...arrayB]);

// console.log(obj);
// obj.hobby = "sketch";
// console.log({ ...obj, fun: "running" });
// console.log({ ...obj, fun: "running", name: "America" });
// console.log("obj after all consoles: ", obj);
// let obj2 = { ...obj, fun: "running", name: "America" };
// console.log("obj2: ", obj2);

// Similar to class below
// function Person() {
//   this.name = "Ebere";
// }

// const person = new Person();
// console.log(person);

// class Person {
//   constructor() {
//     this.name = "Ebere";
//   }
// }

const personObj = {
  name: "Ebere",
  getName: function () {
    return "My name is " + this.name;
  },
  getNameArrow: () => {
    return "My name is " + this.name;
  },
  getHobbies: function () {
    return ["running", "jumping"];
  },
};

console.log(personObj.getName());
console.log(personObj.getNameArrow());
const [hob, hob2] = personObj.getHobbies();
console.log(hob, hob2);
