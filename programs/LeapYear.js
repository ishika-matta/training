/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :  To determine whether the input is a leap year or not
 * 
 * @description
 * 
 * @file        :   LeapYear.js
 * @overview    :   To determine whether the input is a leap year or not
 * @module      :   leapyear module to determine whether the input is a leap year or not
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
let a=require('../utility/utility.js');
console.log("To check whether the input is a leap year or not");
var year=a.input();

a.leapYear(year);

