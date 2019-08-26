/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program takes a input N and prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * @description
 * 
 * @file        :   HarmonicNumber.js
 * @overview    :   harmonicNum module prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
let a=require('../utility/utility.js');
var n=a.input();
module.exports.harmonicNth=function(){
var harmonic=a.harmonicNum(n);
return harmonic;}

