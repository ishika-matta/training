/******************************************************************************
 * Execution    :   default node            terminal> node userInput.js
 * 
 * Purpose      :   LinkedList utility file
 * 
 * @description
 * 
 * @file        :   utilLinkedList.js
 * @overview    :   LinkedList utility file
 * @module      :   LinkedList functions
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
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    // insert at first
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    //insert at last 
    insertLast(data) {
        let node = new Node(data);
        let current;
        if (this.head == null) {
            this.head = new Node(data);
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    //insert at index 
    insertAtIndex(data, ind) {
        if (ind < 0 && ind > this.size) {
            return;
        }
        if (ind === 0) {
            this.head = new Node(data, this.head);
            this.size++;
            return;
        }
        const node = new Node(data);
        let previous = null;
        let current = this.head;
        while (ind) {
            previous = current;
            current = current.next;
            ind--;
        }
        previous.next = node;
        node.next = current;
        this.size++;
    }
    //get at index 
    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) {
                console.log("the data is " + current.data);
            }
            
            current = current.next;
            count++;
            
        }
        //return current.data;
        return null;
    }
    //remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            return;
        }
        else {
            var previous = null;
            var current = this.head;
            var count = 0;
            if (index === 0) {
                this.head = current.next;
                current.next=null;  
            }
            else {
                while (count < index) {
                    previous = current;
                    current = current.next;
                    count++;
                }
                previous.next = current.next;
                current.next=null;
            }
        }
        this.size--;
    }
    //search word in the list
    searchWord(word)
    {
        let current=this.head;
        let count =0;
        while(current)
        {
            if(current.data == word)
            {
                return count;
            }
            current=current.next;
            count++;
        }
        return false;
    }
    //clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    //print list data
    printData() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
    listToString()
    {
        let current=this.head;
        let datalist="";
        while(current)
        {
            datalist=datalist + " " + current.data;
            current=current.next;
        }
        return datalist;
    }

    listToArray()
    {
        let current=this.head;
        let datalist=[];
        let i=0;
        while(current){
            datalist[i]=current.data;
            current=current.next;
            i++;
        }
        return datalist;
    }

    /*sortList(){
        for(var i=0;i<this.size;i++){
            for(var j=0;j<this.size-1;j++){
                if(this.getAt(j+1)<this.getAt(j)){
                    //this.removeAt(j);
                    this.insertAtIndex(this.getAt(j),j);
                    //this.removeAt(j+1);
                    this.insertAtIndex(this.getAt(j+1),j+1);
                }
            }                                       
        }
        this.listToString();
    }*/
};
module.exports={LinkedList,Node};

/*
var ll = new LinkedList();  
ll.insertLast(60); 
ll.insertLast(20); 
ll.insertLast(70); 
ll.insertLast(50); 
ll.insertLast(40); 
console.log(ll.listToString());
console.log(ll.getAt(3));
//console.log(ll.insertAtIndex((ll.getAt(2)),4));
console.log(ll.size);
//ll.sortList();
console.log(ll.listToString());
*/
