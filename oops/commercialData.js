/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   commercial data/stock management file 
 * 
 * @description
 * 
 * @file        :   commercialData.js
 * @overview    :   commercial data/stock management 
 * @module      :   used commercialDataTemplate.js
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/
var readline = require('readline-sync');
var CommercialData=require('../oops/commercialDataTemplate');
var cd=new CommercialData;

function pref() {
    var pref = readline.question("Enter 1 to add customer data, 2 to buy stock and 3 to exit: ");
    if (pref == 1) 
         cd.customerData();
    if (pref == 2) 
        cd.buyStock(); 
    
    }

pref();
