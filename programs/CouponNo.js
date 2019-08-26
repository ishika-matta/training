/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program takes a input N and simulates random number needed to have all distinct numbers
 * 
 * @description
 * 
 * @file        :   CouponNo.js
 * @overview    :   couponno module to simulate random number needed to have all distinct numbers
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline=require('readline-sync');
let a=require('../utility/utility');
var n=a.input();


a.couponNo(n);
