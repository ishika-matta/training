/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   deque utility file
 * 
 * @description
 * 
 * @file        :   utilDeque.js
 * @overview    :   deque utility file
 * @module      :   deque functions
 * @author      :   Ishika Matta imatta09@gmail.com
 * @version     :   1.0
 * @since       :   30-08-2019
*******************************************************************************/

class Deque{
    constructor(){
        this.items=[];
    }
    addFront(element){
        this.items.unshift(element);
    }
    addBack(element){
        this.items.push(element);
    }

    removeFront(){
        if(this.isEmpty())
        return false;
        else
        this.items.shift();
    }

    removeBack(){
        if(this.isEmpty())
        return false;
        else
        this.items.pop();
    }
    isEmpty(){
        if(this.items.length==0)
        return true;
        else
        return false;
    }
    front(){
        if(this.isEmpty())
        return false
        else
        return this.items[0];
    }
    back(){
        if(this.isEmpty())
        return false
        else
        return this.items[this.items.length-1];
    }
    printDeque(){
        var dq=[];
            for(var i=0;i<this.items.length;i++){
                dq=dq+this.items[i]+" ";
            }
            //console.log(dq);
            return dq;
        }
}
module.exports=Deque;

/*
var deque=new Deque();
deque.addFront('sabs');
deque.addFront(2);
deque.addFront(3);
deque.addFront(4);
deque.addBack(5);
deque.addBack(6);
console.log(deque.printDeque());
deque.removeBack();
console.log(deque.printDeque());
deque.removeFront();
console.log(deque.printDeque());
*/
