/**
 * - JavaScript array elements do not all have to be of the same type.
 * 
 * - A JavaScript array is actually a specialized type of JavaScript object,
 *   with the indices being property names that can be integers used to represent offsets. However,
 *   when integers are used for indices, they are converted to strings internally in order to conform to the requirements for JavaScript objects.
 *   Because JavaScript arrays are just objects, they are not quite as efficient as the arrays of other programming languages.
 * 
 * - when you assign one array to another array, you are assigning a reference to the assigned array,
 *   When you make a change to the original array, that change is reflected in the other array as well.
 * 
 * - 4 ways to create an Array:
    * var numbers = [1,2,3,4,5];
    * var numbers = [];
    * var numbers = new Array(n);   --> n is array leangth
    * var numbers = new Array(1,2,3,4,5); 
 * 
 * - Array Built-in Functions:
 
    * split()       --> breaks up a string at a common delimiter,and creates an array of the individual parts of the string.
    * indexOf()     --> returns the index position of the argument. If is not found in the array, the function returns -1.
    * join()        --> return a string containing the elements of the array de‐ limited by commas.  
    * toString()    --> return a string containing the elements of the array de‐ limited by commas.
    * concat()      --> allows you to put together two or more arrays to create a new array.
    * splice()      --> allows you to create a new array from a subset of an existing array.
    * reverse()
    * sort()        --> sort function not work efficiently with the numbers.
    * push()        --> add element from the end.
    * pop()         --> remove element from the end.
    * unshift()     --> add element from the beginning.
    * shift()       --> remove element from the beginning.
    * 
    *   * Non–Array-Generating Iterator Functions *   *
    * 
    * forEach()     --> applying a function to each element of an array.
    * every()       --> applies a Boolean function to an array and returns true if the function can return true for every element in the array.
    * some()        --> applies a Boolean function to an array and returns true if the function can return true for at least one of the elements in the array.
    * reduce()
    * 
    *   * Iterator Functions That Return a New Array *  *
    * 
    * filter()     --> the function returns a new array consisting of those elements that satisfy the Boolean function.
    * map()        --> applying a function to each element of an array like forEach, but return a new array.
 * 
 * - Two-Dimensional and Multidimensional Arrays:
 * 
var twod = [];
var rows = 5;
for(var i=0;i<rows;++i){
    twod[i] = [];
}

* each element of the array is set to undefined
*   --------------------

function(numrows, numcols, initial) {
var arr = []; 
for(var i=0;i<numrows;++i){
    var columns = [];
    for(var j=0;j<numcols;++j){
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr; 
}

*
*
*
 */