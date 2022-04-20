/**
* ADT List   --> Require a smart validation
 
√ listSize (property)         --> Number of elements in list
√ pos (property)              --> Current position in list
√ length (function)           --> Returns the number of elements in list
√ clear (function)            --> Clears all elements from list
√ toString (function)         --> Returns string representation of list
√ getElement(function)        --> Returns element at current position
√ insert (function)           --> Inserts new element after existing element 
√ append (function)           --> Adds new element to end of list
√ remove (function)           --> Removes element from list
√ front (function)            --> Sets current position to first element of list
√ end (function)              --> Sets current position to last element of list
√ prev (function)             --> Moves current position back one element
√ next (function)             --> Moves current position forward one element
√ currPos (function)          --> Returns the current position in list
√ moveTo (function)           --> Moves the current position to specified position
*/




class List{
    constructor(){
        this.data = [];
        this.pos = 0;
        this.listSize = 0;
    }

    isEmpty(){
        return this.listSize === 0;
    }

    length(){
        return this.listSize;
    }

    find(element){
        for(var i=0; i<this.listSize; i++){
            if(element === this.data[i])
                return i;
        }
        return -1;
    }

    remove(element){
        let index = this.find(element);
        if(index > -1 ){
            this.data.splice(index,1);
            this.listSize--;
            return true;
        }
        return false;
    }

    clear(){
       delete this.data;
       this.data = [];
       this.pos = this.listSize = 0;
    }

    toStrign(){
        return this.data;
    }

    getElement(){
        return this.data[this.pos];
    }

    append(element){
        this.data[this.listSize++] = element;
    }

    insert(element,index){
        if(index > 0 && index <= this.listSize){
            this.data.splice(index,0,element);
            this.listSize++;
            return true;
        }
        return false;
    }

    front(){
        this.pos = 0;
    }

    end(){
        this.pos = this.listSize - 1;
    }

    prev(){
        if(!this.isEmpty())
            this.pos--;
        // !(this.isEmpty) ? this.pos-- : this.pos; 
    }

    next(){
        this.listSize  === this.pos ? this.pos : this.pos++; 
    }

    currPos(){
        return this.pos;
    }

    moveTo(index){
        if(index > 0 && index <= this.listSize)
            this.pos = index;
    }

}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia"); 
names.append("Jennifer"); 
names.append("Bryan"); 
names.append("Danny");

names.front();
console.log(names.getElement());    // Clayton

names.next()
console.log(names.getElement());    // Raymond

names.next();
names.next();
names.prev();
console.log(names.getElement());    // Cynthia  

for(names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}