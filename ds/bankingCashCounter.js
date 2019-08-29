var Queue=require('../ds/utilityDS/utilQueue');
var queue=new Queue();
var readline=require('readline-sync');
var n=readline.question("enter the no of people: ");
var balance=0,withdraw=0,deposit=0,check;
for (var i=0;i<n;i++){
    queue.enqueue('i');
    check=readline.question("Enter 0 for withdraw or 1 for deposit for person "+i+" : ");
    if(check==0){
        withdraw=readline.question("Enter withdraw amount: ");
    balance=parseInt(balance)-parseInt(withdraw);
    queue.dequeue();}

    if(check==1){
        deposit=readline.question("Enter deposit amount: ");
    balance=parseInt(balance)+parseInt(deposit);
    queue.dequeue();}
    //else
    //console.log("invalid entry");
}
console.log("Balance is: "+balance);

    


    
