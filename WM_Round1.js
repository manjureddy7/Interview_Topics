// SNIPPET 1
var a = 1;
function b() {
  console.log(" `a` at start of b execution is", a, typeof a);
  a = 10;
  console.log(" `a` after assigning value to it", a, typeof a);
  return;
  function a() {}
}
b();
console.log("Variable a = ", a);

// Explanation:
// When JS run through the above block, in the memory allocation it will assign a as varibale
// and b as function declaration
// On each line by line code execution
// a will be 1
// when function b executed
// It will have its own execution context
// function declaration of a will be allocated in the memory
// on line 6, the local function declartion was set to 10
// (Global a wont be touched, since it modifies the local a)

// ANS: 1

// SNIPPET 2
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
console.log(parent());

// Explanation
// You will get error saying hoisted is not a function
// since hoisted value has been changed in the line 28

// Now modify above snippet to below

function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted;
}
console.log(parent());

// ANS:
// You will get "I'm a variable"

// SNIPPET 3

var myVar = "foo";
(function () {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();

// Explanation
// IIEF will be executed in its own execution context
// So on line 58 it will be UNDEFINED
// On line 60 it will be "BAR"

// Lets change above snippet into below
var myVar = "foo";
function Test() {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
}
Test();

// Even now it will be same output

// SNIPPET 4
function foo() {
  function bar() {
    return 3;
  }
  return bar();
  const bar = () => {
    return 8;
  };
}
console.log(foo());

// You will get an error saying  -> "Identifier bar has already been declared"

// Lets change above snippet to below

function foo() {
  function bar() {
    return 3;
  }
  return bar();
  var bar = () => {
    return 8;
  };
}
console.log(foo());

// Now the console value will be 3

// SNIPPET 5

for (var i = 0; i < 5; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}

// This will generate 0,1,2,3,4

for (var i = 0; i < 5; i++) {
  (function () {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })();
}

// This will generate 5 at each second

// SNIPPET 6

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Im forloop settimeout", i);
  }, i * 1000);
}

setTimeout(function () {
  console.log("Im standalone settimeout", i);
}, 0);

console.log(i);

// Console logs will be in the order of
// It checks for i, where is not defined so
// First -> line 142 will be executed and it returns error
// Second -> i with 0 value from line 134 will be executed and gives Im forloop settimeout
// Third -> line 139 will be executed and gives reference error
// Fourth -> All other for loop setimeout will be executed

// IF I CHANGE LET I TO VAR I IN THE BELOW SNIPPET

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Im forloop settimeout", i);
  }, i * 1000);
}

setTimeout(function () {
  console.log("Im standalone settimeout", i);
}, 0);

console.log("Not settimeout", i);

// Console logs will be in the order of
// It checks for i, where is 0
// First -> line 161 will be executed and it returns 5 since for loop has been exected before it
// Second -> i with 0 value from line 153 will be executed and gives Im forloop settimeout
// Third -> line 158 will be executed and gives 0
// Fourth -> All other for loop setimeout will be executed

// SNIPPET 7

let obj = { a: "123", b: "xyz" };

let obj1 = { c: "456", ...obj };

obj.a = 678;

console.log("Parent Obj", obj);
console.log("Child Obj", obj1);

// Since there is no deeply nested object modification happening it will output
// console.log("Parent Obj", obj); // --> {a: 678,b: "xyz"}
// console.log("Child Obj", obj1); // -> {a: 123, b: "xyz",c:"456"}

// Whether you modify children or parent the deeply nested objects will be modified

// IF YOU MODIFY DEEPLY NESTED OBJECTS BOTH PARENT AND CHILDREN WILL BE AFFECTED
let obj = { a: "123", b: "xyz", c: { a: 123 } };

let obj1 = { c: "456", ...obj };

obj.c.a = 678;

console.log("Parent Obj", obj);
// a: "123"
// b: "xyz"
// c: {a: 678}
console.log("Child Obj", obj1);
a: "123";
b: "xyz";
c: {
  a: 678;
}

let obj = { a: "123", b: "xyz", c: { a: 123 } };

let obj1 = { c: "456", ...obj };

obj1.c.a = 678;

console.log("Parent Obj", obj);
// a: "123"
// b: "xyz"
// c: {a: 678}
console.log("Child Obj", obj1);
// a: "123"
// b: "xyz"
// c: {a: 678}

// SNIPPET 8

// What is Currying?

// Currying is a process in functional programming in which we can transform a
// function with multiple arguments into a sequence of nesting functions. It returns
// a new function that expects the next argument inline.

// Implement sum(1)(2)(3)(4)()
function sum(x) {
  let total = x;
  return function resultFn(y) {
    if (arguments.length) {
      total = total + y;
      return resultFn;
    }
    return total;
  };
}
console.log(sum(1)(2)(10)());

// Implementation
// We know we have to return function but if we have arguments we will return again that fn
// else result
