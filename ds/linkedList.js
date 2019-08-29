var  LinkedList=require('../ds/utilityDS/utilLinkedList').LinkedList;
var ll=new LinkedList();
var Node=require('../ds/utilityDS/utilLinkedList').Node;
var node=new Node();
const fs=require('fs');

//reading a file
function rf(){
    var rf=fs.readFile('input_file.txt','utf-8').toString.split(" ");
   console.log(input);
}