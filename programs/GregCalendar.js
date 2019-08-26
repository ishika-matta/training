/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes 3 inputs month,day,year and calculates day using Gregorian calendar and prints it

 * 
 * @description
 * 
 * @file        :   GregCalendar.js
 * @overview    :   dayOfWeek module calculates roots using formulae 
                    y0 = y − (14 − m) / 12
                    x = y0 + y0/4 − y0/100 + y0/400
                    m0 = m + 12 × ((14 − m) / 12) − 2
                    d0 = (d + x + 31m0 / 12) mod 7
                    For output print 0 for Sunday, 1 for Monday, 2 for Tuesday, and so forth
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/
var readline = require('readline-sync');
let a=require('../utility/utility');

var m1 = readline.question("Enter month: ");
var d1 = readline.question("Enter day: ");
var y1 = readline.question("Enter year: ");
var m = parseInt(m1);
var d = parseInt(d1);
var y = parseInt(y1);

a.dayOfWeek(m, d, y);

