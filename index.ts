#! /usr/bin/env node
import inquirer from "inquirer";

let answer =  await inquirer.prompt([{
    message: "Enter first number:",
    type: "number",
    name: "firstNumber"
},{
    message: "Enter Second number:",
    type: "number",
    name: "SecondNumber"
},{
    message: "Select operator to perfom operation:",
    type: "list",
    name: "operator",
    choices: ['Addition','substraction','multiplication','division']
},
]);

 if(answer.operator==='Addition'){
    console.log(answer.firstNumber + answer.SecondNumber);
    console.log("Author:Engineer Muzamil Ali Laghari");
 }else if(answer.operator==='substraction'){
    console.log(answer.firstNumber - answer.SecondNumber);
    console.log("Author:Engineer Muzamil Ali Laghari");
 }else if(answer.operator==='multiplication'){
    console.log(answer.firstNumber * answer.SecondNumber);
    console.log("Author:Engineer Muzamil Ali Laghari");
 }else if(answer.operator==='division'){
    console.log(answer.firstNumber / answer.SecondNumber);
    console.log("Author:Engineer Muzamil Ali Laghari");
 }else{
    console.log("Enter valid operator:");
 }