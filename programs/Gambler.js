/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program takes input $Stake, $Goal and Number of times and prints no of Wins and Percentage of Win and Loss

 * 
 * @description
 * 
 * @file        :   Gambler.js
 * @overview    :   gambler module determines the logic and calculates the no of Wins and Percentage of Win and Loss
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
var stake=readline.question("Enter the stake: ");
var goal=readline.question("Enter the goal: ");
var n=readline.question("Enter the number of times the game is being played: ");

let a=require('../utility/utility.js');
var res=a.gambler(stake,goal,n)
console.log("The no of bets, win, loss, win percentage, loss percentage resp are: "+res);

