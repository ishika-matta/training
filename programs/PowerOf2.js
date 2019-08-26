/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program takes a input N and prints a table of the powers of 2 that are less than or equal to 2^N
 * 
 * @description
 * 
 * @file        :   PowerOf2.js
 * @overview    :   powerof2 module to print a table of powers of 2 that are less than or equal to 2^N
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline= require('readline-sync');
//var n=readline.question("Enter a number such that 0 <= N < 31: ");
let a=require('../utility/utility.js')
var n=a.input();
a.powerof2(n);
