/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Reads in an arithmetic expression and checks for balanced paranthensis using Stack
 * 
 * @description
 * 
 * @file        :   balancedParanthensis.js
 * @overview    :   Reads in an arithmetic expression and checks for balanced paranthensis
 * @module      :   balancedParam module to check for balanced paranthensis using Stack
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

let util=require('../utility/utility');
var exp = util.input();
console.log(util.balancedParam(exp));
