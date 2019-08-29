class Stack {
    constructor(){
        this.items=[];
    }

    push(element) {
        return this.items.push(element);
    }

    pop() {
        if (this.items.length != 0)
            return this.items.pop();
        else
            return false;
    }

    peek() {
        if (this.size())
            return this.items[this.items.length - 1];
        else
            return false;
    }

    size() {
        if (this.items.length == 0)
            return false;
        else
            return this.items.length;
    }

    isEmpty() {
        if (this.items.length == 0)
            return true;
        else
            return false;
    }

    printStack() {
        var stk = [];
        if (this.size() > 0) {
            for (var i = 0; i < this.items.length; i++) {
                stk = stk + this.items[i] + " ";
            }
            return stk;
        }
    }
}
module.exports = Stack;

/*
var stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(10);
stack.push(20);
stack.push(')');
console.log(stack.size());
//console.log(stack.isEmpty());
//console.log(stack.printStack());
//console.log(stack.peek());
console.log(stack.printStack());
console.log(stack.pop()+1);
console.log(stack.printStack());
//console.log(stack.size());
*/
