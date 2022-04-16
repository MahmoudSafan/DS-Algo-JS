/**
 * ADT List   --> Require a smart validation
 
√ listSize (property)         --> Number of elements in list
√ pos (property)              --> Current position in list
√ length (property)           --> Returns the number of elements in list
√ clear (function)            --> Clears all elements from list
√ toString (function)         --> Returns string representation of list
√ getElement(function)        --> Returns element at current position
√ insert (function)           --> Inserts new element after existing element 
√ append (function)           --> Adds new element to end of list
√ remove (function)           --> Removes element from list
√ front (function)            --> Sets current position to first element of list
end (function)              --> Sets current position to last element of list
prev (function)             --> Moves current position back one element
next (function)             --> Moves current position forward one element
currPos (function)          --> Returns the current position in list
moveTo (function)           --> Moves the current position to specified position

*/

class List{
    constructor(){
        this.data = [];
        this.top = 0;
        this.length = 0;
    }

    listSize(){
        return this.top;
    }

    pos(){
        return this.top -1;
    }

    length(){
        return this.top;
    }

    find(element){
        for(var i=0; i<this.top; i++){
            if(element === this.data[i])
                return i;
        }
        return -1;
    }

    remove(element){
        let index = this.find(element);
        if( index >= 0){
            this.data.splice(index,index);
            this.top--;
            return true;
        }
        return false;
    }

    clear(){
       delete this.data;
       this.data = [];
       this.top = 0
    }

    toStrign(){
        return this.data.join("")
    }

    getElement(){
        return this.data[this.top - 1];
    }

    append(element){
        this.data[this.top++] = element;
    }

    insert(element,index){
        if(index > 0 && index <= this.top){
            this.data.splice(index,0,element);
            this.top++;
            return true;
        }
        return false;
    }

    front(){
        this.top = 0;
    }

}

var l = new List();
l.append(5)
l.append(2)
l.append(5)
l.append(5)
console.log(l.insert(3,2));
l.remove(2);
console.log(l.toStrign());
