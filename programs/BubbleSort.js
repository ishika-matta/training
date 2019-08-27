var readline=require('readline-sync');
let a=require('../utility/utility');
var n=a.input();
var arr=[];
for(var i=0;i<n;i++){
    console.log("at "+i+" position");
    arr[i]=a.input();
}

console.log("The sorted array is: "+a.bubbleSort(arr,n));
