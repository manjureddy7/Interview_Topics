var a = 1
function b() {
  a = 10
  return
  function a() {}
}
b()
console.log(a) // 10


function parent() {
  var hoisted = "I'm a variable"
  function hoisted() {
    return "I'm a function"
  }
  return hoisted()
}
console.log(parent()) // I'm a function


var myVar = 'foo';
(function () {
  console.log("Original value was: " + myVar) // undefined
  var myVar = "bar"
  console.log("New value is: " + myVar) // bar
})()


///////////

function foo() {
// bar
  function bar() {
    return 3
  }
  return bar()
  const bar = () => {
    return 8
  }
}
alert(foo()) // 3




// closure

var xyz = 0

function outer() {
	let a = 10;
  function inner() {
  let b = a + 5;
  return b
  }
  return inner;
}

let xyz = outer();

console.log(xyz())



Currying vs partial application of fn



function abc(x) {
	return def(y) {
    return ghi(z) {
    	return x+y+z
    }
  }
}

let add = abc(1)(2)(3)


partial applications

sum(1)(2)(10).......(5)()


function sum(a) {
	// check if a  ? return sum fn : otherwise recursively call it
  // sum and pass it to the same fn
  
  let total = a;
  if(a) {
  sum(total + a) // not right
  } else {
  return total;
  }
}


event loop



setTimeout(() => console.log("Im  8 second delay), 8000)

setTimeout(() => console.log("Im  8 second delay), 2000)

for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i); // 5,5,5,5,5
}


////////////////////////////////
for(let i=0;i<5; i++){
setTimeout(function(){
console.log(i)
}, i*1000)
} 0,1,2,3

setTimeout(function(){
console.log(i)
},0) // error

console.log(i) // errror


// error
// 0
// error
// 1,2,3


let obj = {a:"123", b: "xyz", c: {a: 123} }

let obj1 = {c:"456", ...obj}

obj.c.a = 678
obj1.c.a // 123

// 
let obj1 = {
 'key1': '1',
 'key2': {
   'a': '2',
   'b': '3',
   'c': {
     'd': { 'x': { 'y': '10' } },
     'e': '1'
   }
 }
}







