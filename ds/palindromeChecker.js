/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Check if the string is a palindrome using Deque
 * 
 * @description
 * 
 * @file        :   palindromeChecker.js
 * @overview    :   take User Input string and checks if it is a palindrome
 * @module      :   palindromeCheck module to Check if the string is a palindrome using Deque
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

let util=require('../utility/utility');
var str=util.input();
console.log(util.palindromeCheck(str));

