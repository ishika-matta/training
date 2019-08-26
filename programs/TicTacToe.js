/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   Program to play Tic-Tac-Toe Game 
 * 
 * @description
 * 
 * @file        :   TicTacToe.js
 * @overview    :   Player 1 is Computer prints * and Player 2 is user
 * @module      :   ticTacToe module which contains logic of the game
 * @author      :   Ishika Matta
 * @version     :   1.0
 * @since       :   22-08-2019
*******************************************************************************/

var readline = require('readline-sync');

var arr = [];
var a = 0;
var b = 0;
var flag = 0;
var user_entry=0;
var comp_entry=0;

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
    inputComp(m, n);

}

function inputComp(m, n) {

    if (arr[m][n] == "#") {
        arr[m][n] = "*";
        comp_entry++;
        console.log(arr);
        console.log("  ");
        flag = checkWin(m, n);
        if (flag == 0) {
            if(user_entry==4 &&comp_entry==5)
            console.log("Draw");
            else
            inputUserLocation();
        }
        else {
            console.log("Comp Wins");
            console.log(arr);
        }
    }

    else
        randomness();
}

function inputUser(m, n) {
    if (arr[m][n] == "#") {
        arr[m][n] = "o";
        user_entry++;
        console.log(arr);
        console.log("  ");
        flag = checkWin(m, n);
        if (flag == 0){
            if(user_entry==4 &&comp_entry==5)
            console.log("Draw");
            else
            randomness();
        }
        else {
            console.log("User Wins");
            console.log(arr);
        }
    }
    if (arr[m][n] == "*") {
        console.log("Enter at new location");
        inputUserLocation();
    }
}

function inputUserLocation() {
    a = readline.question("enter row: ");
    b = readline.question("enter column: ");
    if(a>=0&&a<3&&b>=0&&b<3)
    inputUser(a, b);
    else
    console.log("Invalid Entry Try game again");
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

