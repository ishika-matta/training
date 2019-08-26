/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program that takes amount as input and calculate the minimum number of Notes and Notes returned by Vending Machine as a Change


 * 
 * @description
 * 
 * @file        :   VendingMachine.js
 * @overview    :   vendingMachine module calculates the minimum number of Notes and Notes returned by Vending Machine as a Change
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/


var readline = require('readline-sync');
let a=require('../utility/utility.js');
var value = a.input();

a.vendingMachine(value);