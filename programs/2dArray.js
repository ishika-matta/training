/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program takes M rows, N Cols, and M * N inputs for 2D Array and stores them
 * 
 * @description
 * 
 * @file        :   2dArray.js
 * @overview    :   array2d module to take M * N inputs for 2D Array and store an print them
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
let a=require('../utility/utility');
var m=readline.question("Enter the no of rows: ");
var n=readline.question("Enter the no of columns: ");

a.array2d(m,n);


