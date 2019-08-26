/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   To determine the windchill by taking inputs as temperature(F) and wind speed(miles/hour)
 * 
 * @description
 * 
 * @file        :   WindChill.js
 * @overview    :   windchill module to calculate the wind chill w = 35.74 + 0.6215 * t + (0.4275 * t - 35.75) * Math.pow(v, 0.16)
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/
var readline=require('readline-sync');
let a=require('../utility/utility.js');
var myArgs=process.argv.slice(2);
var t=myArgs[0];
var v=myArgs[1];
a.windChill(t,v);
