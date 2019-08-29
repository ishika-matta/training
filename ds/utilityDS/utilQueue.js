class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty())
        return false;
        else
        this.items.shift();
    }

    isEmpty(){
        if(this.items.length==0)
        return true;
        else
        return false;
    }

    front(){
        if(this.isEmpty())
        return falswe
        else
        return this.items[0];
    }

    printQueue(){
        var qu=[];
            for(var i=0;i<this.items.length;i++){
                qu=qu+this.items[i]+" ";
            }
            return qu;
        }
}

module.exports=Queue;
/*
var queue = new Queue(); 
console.log(queue.dequeue()); 
console.log(queue.isEmpty()); 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
console.log(queue.front()); 
queue.dequeue(); 
console.log(queue.front()); 
console.log(queue.dequeue()); 
console.log(queue.printQueue()); 
*/