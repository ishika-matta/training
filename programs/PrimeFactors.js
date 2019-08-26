/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program takes a input N and computes the prime factorization of N 
 * @description
 * 
 * @file        :   PrimeFactors.js
 * @overview    :   primeFactors module computes the prime factorization of N using brute force
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
let a=require('../utility/utility.js');
var n=a.input();


a.primeFactors(n);