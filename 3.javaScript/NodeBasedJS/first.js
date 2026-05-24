const readline = require("readline");

let greeting = "Hello, I am Simple Calculator";

console.log(greeting);

console.log("Provide me operator");
let rd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const str = Number("a");

console.log(typeof str);
console.log("Sum : ", 10 + str);


rd.question("Enter a operator: ", (op) => {
  switch (op) {
    case "+": {
      rd.question("Enter your number: ", (num1) => {
        rd.question("Enter your second number: ", (num2) => {
          console.log(num1 + num2);
        });
      });
    }
    case "-": {
      rd.question("Enter your number: ", (num1) => {
        rd.question("Enter your second number: ", (num2) => {
          console.log(num1 - num2);
        });
      });
    }
    case "*": {
      rd.question("Enter your number: ", (num1) => {
        rd.question("Enter your second number: ", (num2) => {
          console.log(num1 * num2);
        });
      });
    }
    case "/": {
      rd.question("Enter your number: ", (num1) => {
        rd.question("Enter your second number: ", (num2) => {
          console.log(num1 / num2);
        });
      });
    }

    default:
        console.log("We can only perform +, -, *, /");
  }
});


console.log(Number("a")); // NaN
