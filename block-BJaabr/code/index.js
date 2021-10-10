// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(number){
  return number + 1
}
// - Write a Function Expression
let addOne = function(number){
  return number + 1
}
// - Write an Arrow Function without curly brackets(if possible)
let addOne = (number) => number+1
// - Write an Arrow Function with curly brackets
let addOne = (number) => {
  return number+1;
};

// - Execute the function
addOne();
// - Execute the function and store the return value in a variable.
let returnValue = number + 1
// - What is the typeof returnValue
number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subtractOne(number){
  return number - 1
}
// - Write a Function Expression
let subtractOne = function(number){
  return number - 1
}
// - Write an Arrow Function without curly brackets(if possible)
let subtractOne = (number) => number-1
// - Write an Arrow Function with curly brackets
let subtractOne = (number) => {
  return number-1;
};
// - Execute the function
subtractOne();
// - Execute the function and store the return value in a variable.
let returnValue = number - 1
// - What is the typeof returnValue
number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(numA, numB){
  return numA + numB
};
// - Write a Function Expression
let addTwoNumbers = function sum(numA, numB){
  return numA + numB
};
// - Write an Arrow Function without curly brackets(if possible)
let addTwoNumbers = (numA , numB) => numA + numB
// - Write an Arrow Function with curly brackets
let addTwoNumbers = (numA , numB) => {
  return numA + numB
}
// - Execute the function
addTwoNumbers();
// - Execute the function and store the return value in a variable
let returnValue = numA + numB
// - What is the typeof returnValue
number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(numA){
  return numA * numA
};
// - Write a Function Expression
let square =  function square(numA){
  return numA * numA
};
// - Write an Arrow Function without curly brackets(if possible)
let square = (numA) => numA * numA
// - Write an Arrow Function with curly brackets
let square = (numA) => {
  return numA * numA
}
// - Execute the function
square();
// - Execute the function and store the return value in a variable
let returnValue = numA * numA
// - What is the typeof returnValue
number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x,y){
  if(x>y){
    return true
  }else{
    return false
  }
}
// - Write a Function Expression
let isGreater = function isGreater(x,y){
  if(x>y){
    return true
  }else{
    return false
  }
}
// - Write an Arrow Function without curly brackets(if possible)
let isGreater = (x,y) =>  {if(x>y){
  return true
}else{
  return false
}
}
// - Write an Arrow Function with curly brackets
let isGreater = (x,y) => {
  if(x>y){
    return true
  }else{
    return false
  }
}
// - Execute the function
isGreater();
// - Execute the function and store the return value in a variable

// - What is the typeof returnValue
Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(number){
  if(number / 2 ==0){
    alert("number is even")
  }else{
    alert("number is odd")
  }
}
// - Write an anonymous Function Expression
let oddOrEven = function(number){
  if(number / 2 ==0){
    alert("number is even")
  }else{
    alert("number is odd")
  } 
}
// - Write an named Function Expression
let oddOrEven = function(number){
  if(number / 2 ==0){
    alert("number is even")
  }else{
    alert("number is odd")
  } 
}
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) => {if(number / 2 ==0){
  alert("number is even")
}else{
  alert("number is odd")
} 
}
// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {if(number / 2 ==0){
  alert("number is even")
}else{
  alert("number is odd")
} 
}
// - Execute the function
oddOrEven();
// - Execute the function and store the return value in a variable
let returnValue =  alert("number is even");
// - What is the typeof returnValue
String