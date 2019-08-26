/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes 2 inputs and calculates eucledain distance from origin and prints it

 * 
 * @description
 * 
 * @file        :   Distance.js
 * @overview    :   eucledainDist module calculates distance = sqrt(x*x + y*y) and prints it
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/


var readline=require('readline-sync');
let a=require('../utility/utility.js');

module.exports.distance=function(){
var x1=readline.question("Enter the x coordinate: ");
var y1=readline.question("Enter the y coordinate: ");
//var x=parseInt(x1);
//var y=parseInt(y1);

var dist=a.eucledainDist(x1,y1);
//console.log(typeof(dist));
return dist;
}

