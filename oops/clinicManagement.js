/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :  maintaining a record of doctor,patient
 * 
 * @description
 * 
 * @file        :   clinicManagement.js
 * @overview    :   maintaining a record of doctor,patient
 * @module      :   Clinique Management class 
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/
var readline = require('readline-sync');
var Clinic=require('../oops/cliniqueManagement');
var clinic=new Clinic;

function pref() {
    var pref = readline.question("Enter 1 to add patients data, 2 to search doctor, 3 to search patient , 4 to take appointment and 5 to exit: ");
    if (pref == 1) 
         clinic.patientData();
    if (pref == 2) 
        console.log(clinic.searchDoc());
    if (pref == 3) 
          console.log(clinic.searchPatient());
    if (pref == 4) 
        clinic.takeAppointment();   
    
    }


pref();
