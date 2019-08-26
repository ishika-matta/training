/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes non negative input and calculates sqaureroot using Newton Method

 * 
 * @description
 * 
 * @file        :   NewtonSqrt.js
 * @overview    :   sqrt module calculates square root of using Newton's method:
                    Math.abs(t - (c / t)) > (Math.pow(10, -15)) * t
                    t = ((c / t) + t) / 2
                    and prints it
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');
let a = require('../utility/utility.js'); 
var c = a.input();



console.log("The sqrt using Newton method is: "+a.sqrt(c));