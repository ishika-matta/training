/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program with cubic running time. Read in N integers and counts the number of triples that sum to exactly 0

 * 
 * @description
 * 
 * @file        :   Triplets.js
 * @overview    :   triplet module counts the number of triples that sum to exactly 0
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
var n=readline.question("Enter the length: ");
var a=require('../utility/utility.js');
var arr=[];

console.log("Enter the integers");
for(i=0;i<n;i++)
{
    arr[i]=readline.question();
}

a.triplet(n, arr);