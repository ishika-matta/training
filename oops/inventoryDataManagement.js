/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :  inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg.

 * 
 * @description
 * 
 * @file        :   inventoryDataManagement.js
 * @overview    :   inventory  with properties
 * @module      :   inventoryData()
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

const util=require('../utility/utility');
var result=util.inventoryData();
console.log("Value is: "+result);
