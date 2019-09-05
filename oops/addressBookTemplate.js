var fs = require('fs');
var readline = require('readline-sync');

function fileRead(filename, callback) {
    fs.readFile(filename, 'utf-8', function (err, data) {
        callback(null, data);
    })
}
function saveAddress(data) {

    fs.writeFile('addressBook.json', data, (err) => {
        if (err) throw err;
        console.log("FILE UPDATED");
    });
}
function pref() {
    var pref = readline.question("Enter 1 to add address, 2 to update, 3 to delete, 4 to sort and 5 to exit: ");

    if (pref == 1) {
        fileRead('addressBook.json', (err, data) => {
            var file = data;
            var elements = [];
            elements = JSON.parse(file);

            var i = elements.length;
            var firstName = readline.question("Enter first name: ");
            var lastName = readline.question("Enter last name: ");
            var address = readline.question("Enter address: ");
            var city = readline.question("Enter city: ");
            var state = readline.question("Enter state: ");
            var zip = readline.question("Enter zip: ");
            var phoneNumber = readline.question("Enter phone number: ");
            var obj = {
                firstName: firstName,
                lastName: lastName,
                address: address,
                city: city,
                state: state,
                zip: zip,
                phoneNumber: phoneNumber
            }
            elements[i] = obj;
            i++;
            let dataAdd = JSON.stringify(elements);
            saveAddress(dataAdd);
        });


    }
    if (pref == 2) {
        fileRead('addressBook.json', (err, data) => {

            var file = data;
            var elements = [];
            elements = JSON.parse(file);
            var intialValue = readline.question("Enter the value to updated: ");
            var finalValue = readline.question("Enter the new value: ");

            for (var i = 0; i < elements.length; i++) {
                if (elements[i].firstName == intialValue)
                    elements[i].firstName = finalValue;
                if (elements[i].lastName == intialValue)
                    elements[i].lastName = finalValue;
                if (elements[i].address == intialValue)
                    elements[i].address = finalValue;
                if (elements[i].city == intialValue)
                    elements[i].city = finalValue;
                if (elements[i].state == intialValue)
                    elements[i].state = finalValue;
                if (elements[i].zip == intialValue)
                    elements[i].zip = finalValue;
                if (elements[i].phoneNumber == intialValue)
                    elements[i].phoneNumber = finalValue;
            }
            let dataAdd = JSON.stringify(elements);
            saveAddress(dataAdd);
        });
    }

    if (pref == 3) {
        fileRead('addressBook.json', (err, data) => {
            var file = data;
            var elements = [];
            elements = JSON.parse(file);
            var itemDel = readline.question("Enter the item to be deleted: ");
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].firstName == itemDel || elements[i].lastName == itemDel
                    || elements[i].address == itemDel || elements[i].city == itemDel
                    || elements[i].state == itemDel || elements[i].zip == itemDel ||
                    elements[i].phoneNumber == itemDel) {
                    elements.splice(i, 1);
                    break;
                }
            }

            let dataAdd = JSON.stringify(elements);
            saveAddress(dataAdd);

        });
    }
    if (pref == 4) {
        fileRead('addressBook.json', (err, data) => {
            var file = data;
            var elements = [];
            elements = JSON.parse(file);

            //sorting
            for (var i = 0; i < elements.length; i++) {
                for (var j = 0; j < elements.length - 1; j++) {
                    if (elements[j + 1].lastName < elements[j].lastName) {
                        var temp = elements[j];
                        elements[j] = elements[j + 1];
                        elements[j + 1] = temp;

                    }
                    else if (elements[j + 1].firstName < elements[j].firstName && elements[j + 1].lastName == elements[j].lastName) {
                        var temp = elements[j];
                        elements[j] = elements[j + 1];
                        elements[j + 1] = temp;

                    }
                    else if (elements[j + 1].zip < elements[j].zip && elements[j + 1].lastName == elements[j].lastName && elements[j + 1].firstName == elements[j].firstName) {
                        var temp = elements[j];
                        elements[j] = elements[j + 1];
                        elements[j + 1] = temp;

                    }
                }
            }

            let dataAdd = JSON.stringify(elements);
            saveAddress(dataAdd);
        });
    }
    else
        return;

}

pref();

