/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   queue using linked list utility file
 * 
 * @description
 * 
 * @file        :   utilQueueLL.js
 * @overview    :   queue using linked list utility file
 * @module      :   queue using linked list functions
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
};

class QueueLL{
    constructor(){
        this.front = null;
        this.back=null;
        this.size = 0;
    }

    enqueue(data){
        let node=new Node(data);
        if(this.back==null){
            this.front=node;
            this.back=node;
            //console.log(this.front);
            //console.log(QueueLL.back);
        }
        else{
            this.back.next=node;
            this.back=this.back.next;
            //console.log(this.front);
            //console.log(QueueLL.back);
        }

    }

    dequeue(){
        if(this.front!=null){
            var frontElement=this.front;
            this.front=this.front.next;
            return frontElement.data;
        }
        else{
            if(this.back!=null){
                this.back=null;
            }
            else
            return false;
        }
    }

    printQueueLL(){
        var current=this.front;
        let qlist="";
        while(current)
        {
            qlist=qlist + " " + current.data;
            current=current.next;
        }
        return qlist;
    }
}
module.exports=QueueLL;

/*var queue = new QueueLL(); 
console.log(queue.dequeue()); 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
console.log(queue.printQueueLL()); */



