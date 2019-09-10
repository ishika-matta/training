/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :  maintaining an address book 
 * 
 * @description
 * 
 * @file        :   addressManagement.js
 * @overview    :   add address, to update, to delete and sort
 * @module      :   AddressBook 
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

var readline = require('readline-sync');
var AddressBook = require('../oops/addressBookTemplate');
var ab = new AddressBook;

function pref() {
    var pref = readline.question("Enter 1 to add address, 2 to update, 3 to delete, 4 to sort and 5 to exit: ");
    if (pref == 1)
        ab.addAdress();
    if (pref == 2)
        ab.updateAddress();
    if (pref == 3)
        ab.deleteAddress();
    if (pref == 4)
        ab.sortAddress();
        //else
        //console.log("Invalid input");
}
pref();