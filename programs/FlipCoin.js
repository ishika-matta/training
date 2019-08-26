/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Flip coin n no of times and print percentage of heads and tails
 * 
 * @description
 * 
 * @file        :   FlipCoin.js
 * @overview    :   flipno module to calculate percentage of heads and tails
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');
let a=require('../utility/utility.js');
console.log("No of times the coin is flipped");
var flipno = a.input();

a.coin(flipno);
