/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes decimal no input converts into binary and then swap nibbles to get resultant decimal no

 * 
 * @description
 * 
 * @file        :   Binary.js
 * @overview    :   swapNibbles module that 
 *                  Swap nibbles and find the new number
                    Find the resultant number is the number is a power of 2

                    and prints it
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');
let a=require('../utility/utility');
var n = a.input();
var binary=a.toBinary(n);
console.log(binary); 

console.log(a.swapNibbles(binary));
   