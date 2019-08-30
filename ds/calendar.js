/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Print greg calendar using 2D array
 * 
 * @description
 * 
 * @file        :   calendar.js
 * @overview    :   take command line Input and prints the calendar
 * @module      :   calendar module to print the month/year calendar using 2D array
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/


const util=require('../utility/utility');
const readline=require('readline-sync');
var myArgs=process.argv.slice(2);
var m=parseInt(myArgs[0]);
var y=parseInt(myArgs[1]);

util.calendar(m,y);



