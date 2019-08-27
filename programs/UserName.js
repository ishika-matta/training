/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   To take User Input and replace string template
 * 
 * @description
 * 
 * @file        :   UserName.js
 * @overview    :   take User Input and replace string template
 * @module      :   username module to replace string template
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');
let a=require('../utility/utility.js');

var name = readline.question(" “Hello <<UserName>>, How are you?” ");
console.log(typeof(name));
console.log(" Hello " + a.userName(name) + ", How are you? ");



