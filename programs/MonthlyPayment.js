/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes 3 inputs and calculates monthly payment and prints it

 * 
 * @description
 * 
 * @file        :   MonthlyPayment.js
 * @overview    :   monthlyPayment module calculates monthly payment using formulae
                    r = rate / (12 * 100);
                    n = 12 * y;
                    pay = (p * r) / (1 - Math.pow(1 + r, -n));
                    and prints it
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');

let a=require('../utility/utility.js');
var p = readline.question("Enter the principal loan: ");
var y = readline.question("Enter the no of years: ");
var rate = readline.question("Enter the rate of interest: ");

console.log("Monthly Payment is: "+a.monthlyPayment(p,y,rate));