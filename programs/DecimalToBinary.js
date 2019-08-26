/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes decimal no input and prints padded binary no

 * 
 * @description
 * 
 * @file        :   DecimalToBinary.js
 * @overview    :   toBinary module that outputs the binary (base 2) representation of the decimal no
 *                  
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/


var readline = require('readline-sync');
let a=require('../utility/utility');
var n = a.input();

console.log("The binary equivalent is: ");
console.log(a.toBinary(n));
