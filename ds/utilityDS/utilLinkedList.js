/*class Node{
    constructor(element){
        this.element=element;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    addElement(element){
        var node=new Node(element);
        var current;
        if(this.head==null)
        this.head=node;
        else{
            current=this.head;

            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size=this.size+1;
    }

    removeElement(element){
         var current=this.head;
         var prev=null;

         while(current!=null){
             if(current.element==element){
                 if(prev==null){
                     this.head=current.next;
                 }
                 else{
                     prev.next=current.next;
                 }
                 this.size--;
                 return current.element;
                }
                prev=current;
                current=current.next;
            }
            return -1;
    }

    printList(){
        var current=this.head;
        var str=" ";
        while(current){
            str=str+current.element+" ";
            current=current.next;
        }
        console.log(str);
    }

    isEmpty() {
        if (this.size == 0)
            return true;
        else
            return false;
    }
}
*/

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
};
module.exports={LinkedList,Node};
/*
var ll = new LinkedList(); 
console.log(ll.isEmpty()); 
ll.addElement(10); 
ll.printList(); 
ll.addElement(20); 
ll.addElement(30); 
ll.addElement(40); 
ll.addElement(50); 
ll.printList();  
console.log("remove element" + ll.removeElement(50)); 
ll.printList(); 
console.log("is List Empty ? " + ll.isEmpty()); 
ll.printList(); 
*/