/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   clinic management utility file
 * 
 * @description
 * 
 * @file        :   cliniqueManagemnet.js
 * @overview    :   clinic management utility file
 * @module      :   add patient, search doc, serach pat, take appointment
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   09-09-2019
*******************************************************************************/

var fs = require('fs');
var util = require('../utility/utility');
// var util = require('/home/user/Desktop/ishika-matta/oops/patient.json');

class Clinic {
    input() {
        var readline = require('readline-sync');
        var value = readline.question();
        return value;
    }

    fileRead(filename, callback) {
        let data = fs.readFileSync(filename, 'utf-8');
        callback(null, data);
    }




    savePatient(data) {
        fs.writeFileSync('patient.json', data)
        console.log("FILE UPDATED");
    }



    patientData() {
        try {
            this.fileRead('patient.json', (err, data) => {
                var file = data;
                var elements = [];
                elements = JSON.parse(file);
                var i = elements.length;
                console.log("Enter patient name: ");
                var patientName = this.input();
                console.log("Enter patient id: ");
                var patientId = this.input();
                if (isNaN(patientId)) throw "patient Id must be a number"
                console.log("Enter patient mobile no: ");
                var patientMobile = this.input();
                if (isNaN(patientMobile)) throw "patient mobile no must be a number"
                if (patientMobile.length != 10) throw "input patient mobile no must be a valid number"
                console.log("Enter patient age: ");
                var patientAge = this.input();
                if (isNaN(patientAge)) throw "patient age must be a number"
                if (patientAge.length > 2) throw "input patient age must be a valid number"
                var obj = {
                    patientName: patientName,
                    patientId: patientId,
                    patientMobile: patientMobile,
                    patientAge: patientAge
                }
                elements[i] = obj;
                i++;
                let dataPat = JSON.stringify(elements);
                this.savePatient(dataPat);
            });
        }

        catch (err) {
            console.log(err);
            this.patientData();
        }
    }

    searchDoc() {
        try {
            var docContent = fs.readFileSync('doctors.json', 'utf8');
            var objDoc = JSON.parse(docContent);
            console.log("Enter to 1 search for doctor by Name");
            console.log("Enter to 2 search for doctor by Id");
            console.log("Enter to 3 search for doctor by Specialization ");
            console.log("Enter to 4 search for doctor by Availability");
            var idc = this.input();
            if (isNaN(idc)) throw "input choice must be a number"
            if (idc == 1 || idc == 2 || idc == 3 || idc == 4) {
                if (idc == 1) {
                    console.log("Enter doctor name");
                    var idn = this.input();
                    for (var i = 0; i < objDoc.length; i++) {
                        if (objDoc[i].docName === idn)
                            return (objDoc[i]);
                    }
                }
                if (idc == 2) {
                    console.log("Enter doctor id");
                    var idd = this.input();
                    if (isNaN(idd)) throw "input doc id must be a number"
                    for (var i = 0; i < objDoc.length; i++) {
                        if (objDoc[i].docId == idd)
                            return (objDoc[i]);
                    }
                }
                if (idc == 3) {
                    console.log("Enter doctor Specialization");
                    var ids = this.input();
                    for (var i = 0; i < objDoc.length; i++) {
                        if (objDoc[i].docSpecialization === ids)
                            return (objDoc[i]);
                    }
                }
                if (idc == 4) {
                    console.log("Enter doctor Availability");
                    var ida = this.input();
                    for (var i = 0; i < objDoc.length; i++) {
                        if (objDoc[i].docAvailability === ida)
                            return (objDoc[i]);
                    }
                }
                else
                    console.log("this doctor does not exist");
            }
            else
                return "wrong choice input";
        }
        catch (err) {
            console.log(err);
            this.searchDoc();
        }
    }


    searchPatient() {
        try {
            var patContent = fs.readFileSync('patient.json', 'utf8');
            var objPat = JSON.parse(patContent);
            console.log("Enter to 1 search for patient by Name");
            console.log("Enter to 2 search for patient by Id");
            console.log("Enter to 3 search for patient by Mobile No ");
            console.log("Enter to 4 search for patient by Age");
            var ipc = this.input();
            if (isNaN(ipc)) throw "input choice must be a number"
            if (ipc == 1 || ipc == 2 || ipc == 3 || ipc == 4) {
                if (ipc == 1) {
                    console.log("Enter patient name");
                    var ipn = this.input();
                    for (var i = 0; i < objPat.length; i++) {
                        if (objPat[i].patientName === ipn)
                            return (objPat[i]);
                    }
                }
                if (ipc == 2) {
                    console.log("Enter patient id");
                    var ipid = this.input();
                    if (isNaN(ipid)) throw "input patient id must be a number"
                    for (var i = 0; i < objPat.length; i++) {
                        if (objPat[i].patientId === ipid)
                            return (objPat[i]);
                    }
                }
                if (ipc == 3) {
                    console.log("Enter patient Mobile");
                    var ipm = this.input();
                    if (isNaN(ipm)) throw "input patient Mobile must be a number"
                    if (ipm.length != 10) throw "input patient Mobile must be a valid number"
                    for (var i = 0; i < objPat.length; i++) {
                        if (objPat[i].patientMobile === ipm)
                            return (objPat[i]);
                    }
                }
                if (ipc == 4) {
                    console.log("Enter patient Age");
                    var ipa = this.input();
                    if (isNaN(ipa)) throw "input patient age must be a number"
                    if (ipa.length > 2) throw "input patient age must be a valid number"
                    for (var i = 0; i < objPat.length; i++) {
                        if (objPat[i].patientAge === ipa)
                            return (objPat[i]);
                    }
                }
                else {
                    console.log("Such a patient does not exist, so update");
                    this.patientData();
                }

            }

            else
                return "wrong choice input";
        }
        catch (err) {
            console.log(err);
            this.searchPatient();
        }
    }


    takeAppointment() {
        try {
            var freq = [];
            var doc = [];
            var j = -1;
            var i = -1;
            var pat = [];
            var count = 0;
            while (true) {

                console.log("Enter 1 to continue and 0 to exit: ");
                var n = this.input();
                if (isNaN(n)) throw "input must be a number"
                if (n == 1) {
                    i = i + 1;
                    doc[i] = this.searchDoc().docId;
                    console.log(doc);
                }
                for (var l = 0; l < doc.length; l++) {
                    count = 1;
                    for (var m = l + 1; m < doc.length; m++) {
                        if (doc[l] == doc[m]) {
                            count++;
                            freq[m] = 0;
                        }
                    }
                    if (freq[l] != 0)
                        freq[l] = count;

                }
                for (var i = 0; i < freq.length; i++) {
                    if (freq[i] >= 5 && doc[i] != undefined)
                        console.log("limit of 5 exceeded. No more appointment for today: " + doc[i]);
                }

                console.log(freq);


                // pat[j] = this.searchPatient().patientId;
                //j++;
                //console.log(pat);
            }
        }
        catch (err) {
            console.log(err);
            this.takeAppointment();
        }
    }
}


module.exports = Clinic;
//module.exports = new Clinic();

/*var c = new Clinic;
c.searchDoc();
c.searchPatient();
c.takeAppointment();*/
