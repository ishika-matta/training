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
var year=parseInt(a.input());
console.log(year);
var ans=a.leapYear(year);
console.log(ans);
if(ans==true)
console.log(year + " is a leap year");
else
console.log(year + " is a not leap year");

