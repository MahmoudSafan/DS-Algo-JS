/**
 *  ** Operations **
 * Push
 * Pop
 * Peek
 * isEmpty
 * clear
 * 
 *  ** Property **
 * length
 * 
 */

class Stack{
   constructor(){
       this.Data = []
       this.length = 0
   }

   push(element){
       this.Data[this.length++] = element;
   }

   isEmpty(){
       return !this.length > 0 ;
   }

   pop(){
       if(this.isEmpty()){
           return null;
       } 
       return this.Data[--this.length];
   }

   peek(){
       if(this.isEmpty()){
           return null;
       } 
       return this.Data[this.length-1]
   }

   clear(){
       delete this.Data
       this.Data = []
       this.length = 0
   }
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");

console.log("length: " + s.length);
console.log(s.peek());

var popped = s.pop();
console.log("The popped element is: " + popped); 
console.log(s.peek());

s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length); 
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());