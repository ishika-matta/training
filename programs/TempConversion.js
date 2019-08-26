/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes temperature in fahrenheit as input outputs the temperature in Celsius and viceversa


 * 
 * @description
 * 
 * @file        :   TempConversion.js
 * @overview    :   tempConversion module calculates roots using formulae 
                    Celsius to Fahrenheit:   (°C × 9/5) + 32 = °F
                    Fahrenheit to Celsius:   (°F − 32) x 5/9 = °C

                    and prints it
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/



var readline = require('readline-sync');
let a = require('../utility/utility.js');
console.log("Enter temperature in Celsius: ");
var tempc= a.input();
console.log("Enter temperature in Fahrenheit: ");
var tempf = a.input();
console.log("Temperature in Fahrenheit and Celsius respectively are: " + a.tempConversion(tempc, tempf));


