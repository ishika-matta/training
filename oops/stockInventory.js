/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.

 * 
 * @description
 * 
 * @file        :   stockReport.js
 * @overview    :   Print a Stock Report with total value of each Stock and the total value of Stock.

 * @module      :   userInputStock()
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

const util=require('../utility/utility');
var result=util.inventoryStockData();
console.log("Value of shares is: "+result);
