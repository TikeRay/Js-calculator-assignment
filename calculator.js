let num1 = parseInt(prompt("Number 1: "));
let opr = prompt("Operator: ");
let num2 = parseInt(prompt("Number 2: "));


let result;
if (opr == "+") {
  result = num1 + num2;
} else if (opr == "-") {
    result = num1 - num2;
} else if (opr == "*") {
    result = num1 * num2;
} else if (opr == "/") {
    result = num1 / num2;
}
alert ("Answer:" + " " + result);