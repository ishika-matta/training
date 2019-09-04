/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Read file and take user input to search a number using hashing
 * 
 * @description
 * 
 * @file        :   hashNum.js
 * @overview    :   Simulate file input/output using LinkedList
 * @module      :   hashNum module to Read file search a number using hashing
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   03-09-2019
*******************************************************************************/

let util=require('../utility/utility');
var num=util.input();
util.hashNum('../ds/numFile.text',num);