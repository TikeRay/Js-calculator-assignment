let opr = prompt ("Operator:  ")
let num1 = parseInt(prompt("Number 1:  "))
let num2 = parseInt(prompt("Number 2  "))

if(opr == "+")
{
    console.log(num1 + num2)   
} else if(opr == "-")
{
    console.log(num1 - num2)
} else if(opr == "*")
{
    console.log(num1 * num2)
} else if(opr == "/")
{
    console.log(num1 / num2)
}