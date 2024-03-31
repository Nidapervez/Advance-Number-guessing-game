#! /usr/bin/env node
import inquirer from "inquirer"
console.log("Guess number from 1-9")
const randomNumber = Math.floor (Math.random () * 10 + 1);
let condition=true;
while(condition){
const answers = await inquirer.prompt([
    {
    name: "userGuessedNumber",
    type:"number",
    message:"Please guess a number",
}
]);

if(answers.userGuessedNumber === randomNumber){
console.log ("Congratulations. you guessed right number")
}
else{
console.log("You guessed wrong number")
}
const answer2=await inquirer.prompt([{
    type: "confirm",
    name: "tryagain",
    message: "Do you want to add more number?",
    default: "false"
  }
 ])
  condition=answer2.tryagain;
 }