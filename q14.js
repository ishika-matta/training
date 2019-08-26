var readline = require('readline-sync');

var arr = [];
var a = 0;
var b = 0;
var flag = 0;

function ticTacToe() {

    for (r = 0; r < 3; r++) {
        arr[r] = [];
        for (var c = 0; c < 3; c++) {
            arr[r][c] = ["#"];
        }
    }
    console.log(arr);
    console.log("  ");
    randomness();
}
function randomness() {
    var m = parseInt(Math.random() * 3);
    var n = parseInt(Math.random() * 3);
    checkComp(m, n);

}

function checkComp(m, n) {

    if (arr[m][n] == "#") {
        arr[m][n] = "*";
        console.log(arr);
        console.log("  ");
        flag = checkWin(m, n);
        if (flag == 0) inputUser();
        else console.log("Comp Wins");
    }

    else
        randomness();
}

function checkUser(m, n) {
    if (arr[m][n] == "#") {
        arr[m][n] = "o";
        console.log(arr);
        console.log("  ");
        flag = checkWin(m, n);
        if (flag == 0) randomness();
        else console.log("User Wins");
    }
    if (arr[m][n] == "*") {
        console.log("Enter at new location");
        inputUser();
    }



}

function inputUser() {
    a = readline.question("enter row: ");
    b = readline.question("enter column: ");
    checkUser(a, b);
}


function checkWin(m, n) {
    if (arr[m][0] == arr[m][1] && arr[m][1] == arr[m][2])
        return 1;
    if (arr[0][n] == arr[1][n] && arr[1][n] == arr[2][n])
        return 1;
    if (arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2])
        return 1;
    if (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0])
        return 1;
    else
        return 0;
}
ticTacToe();
//defArr();
//randomness();
