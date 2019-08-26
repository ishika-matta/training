/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes 3 inputs and calculates roots and prints it

 * 
 * @description
 * 
 * @file        :   Quadratic.js
 * @overview    :   QuadRoot module calculates roots using formulae 
 *                  delta = b*b - 4*a*c
                    Root 1 of x = (-b + sqrt(delta))/(2*a)
                    Root 2 of x = (-b - sqrt(delta))/(2*a)
                    and prints it
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
let util=require('../utility/utility.js');
 
var a0=readline.question("Enter the value of a: ");
var b0=readline.question("Enter the value of b: ");
var c0=readline.question("Enter the value of c: ");
var a=parseInt(a0);
var b=parseInt(b0);
var c=parseInt(c0);
util.quadRoot(a,b,c);
