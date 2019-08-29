const Deque= require('double-ended-queue');
const readline=require('readline-sync');
var deque=new Deque();

//deque.insertFront("as");

var str=readline.question("Enter a string: ");
for(var i=0;i<str.length;i++){
deque.insertRear(str[i]);}
console.log(deque);
if(deque==str)
console.log("t");
console.log("f");

/*var Queue=require('queue-fifo');
var queue=new Queue();
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
console.log(queue);*/