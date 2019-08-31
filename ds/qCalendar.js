/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   calendar print using queue made using linked list
 * 
 * @description
 * 
 * @file        :   qCalendar.js
 * @overview    :   print calendar using queue made using linked list
 * @module      :   qCalendar module to print calendar using queue
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/
const util=require('../utility/utility');
const readline=require('readline-sync');
var myArgs=process.argv.slice(2);
var m=parseInt(myArgs[0]);
var y=parseInt(myArgs[1]);
util.qCalendar(m,y);

