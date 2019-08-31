/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Number of Binary Search Tree
 * 
 * @description
 * 
 * @file        :   numBST.js
 * @overview    :   take User Input and finds Number of Binary Search Tree
 * @module      :   nBST module to find Number of Binary Search Tree
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

let util=require('../utility/utility');
var n=parseInt(util.input(),0);
//var numOfBST=util.nBST(n).length-1;
console.log("Total no of BST of node " +n+" are: "+util.nBST(n));