/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Simulating File input/output using ordered linked list
 * 
 * @description
 * 
 * @file        :   orderedList.js
 * @overview    :   Read Numbers from file arrange ascending Order in a Linked List.
 *                  Take user input for a number, if found then pop the number out of the list 
 *                  else insert the number in appropriate position

 * @module      :   orderedList module to simulate File input/output using ordered linked list
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

let util=require('../utility/utility');
var n=util.input();
let path='../ds/input_number.txt';
util.orderedList(path,n);
