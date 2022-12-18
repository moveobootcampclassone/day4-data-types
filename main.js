"use strict";

const hello = "Hola, como estas?";
// hello = "hi";
// console.log(hello);
let response = "bien!";

response = "good";
console.log(response);
response = 4;
console.log(response);
console.log(typeof response, "this is typeof response");

// zoya --> move response down to show that the string varaible won't print 'bien!' before it's declared
//
// const string = `${hello} - he said in spanish, so I just replied: ${response} but I should've said: ${response = 'mal'}`
//
function test() {
  const example = `I don't know why, but all developers like the term: ${greeting}`;
  return example;
}
test();
//

console.log(greeting);
var greeting = "Hello, World22!";
greeting = 44;

// function declaration
function greeting() {
  alert("Hello World!");
  console.log("Hello World!");
  //   console.log(2 + 2);
}

//calling a function
greeting();

const test = 42;

var var1 = 22;

function try1() {
  const y = 2;
  let a;
  console.log(y, "y");
  console.log(var1);
  console.log(test, "test");
}

function try2() {
  const x = 6;
  //   console.log(y, "y");
  console.log(test, "test");
}

console.log(test);

try1();
try2();

let address = "Ashkelon";
const personName = "Zoya";
let test22 = personName + " likes to visit" + address + " every other weekend";
let sentence = `${personName} likes to visit ${address} every other weekend`;
console.log(sentence);
address = "Tel Aviv";
sentence = `${personName} likes to visit ${address} every other weekend`;
console.log(sentence);
console.log(address);
