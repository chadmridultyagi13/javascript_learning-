// forEach -> yeh kabhi bhi koi value return nhi karta 
/*
The video begins by discussing loops in JavaScript, specifically focusing on advanced concepts like filter, map, and reduce. Here's a detailed explanation of the first 20 minutes:

1. For-Each Loop
The forEach loop is introduced as a method to iterate over arrays. It takes a callback function as an argument, which is executed for each element in the array.

Key Points:
Syntax:

array.forEach(function(element, index, array) {
    // Code to execute for each element
});

element: The current element being processed.
index: The index of the current element.
array: The array that forEach is iterating over.
Example:

let numbers = [1, 2, 3, 4];
numbers.forEach(function(num) {
    console.log(num * 2); // Prints 2, 4, 6, 8
});

Important Note: The forEach loop does not return any value. If you try to assign its result to a variable, it will be undefined. This is a common mistake made by beginnersss.

Explicit Return: If you want to return a value for each iteration, you must use other methods like map.

2. Filter Method(isme bhi call back function lete hai )
The filter method is introduced as a way to create a new array containing only the elements that meet a specific condition.

Key Points:
Syntax:

let newArray = array.filter(function(element, index, array){
    return condition; // Condition to filter elements
});

Example:

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0; // Keeps only even numbers
});
console.log(evenNumbers); // Output: [2, 4]


in terms of arrow function -> 
let array = numbers.filter((num) => num>4)
let array = numbers.filter((num) => (num>4))
let array = numbers.filter((num) => {
    return num>4})
output  array after printing would be same in all three cases 


How It Works:

The filter method iterates over each element of the array.
It applies the callback function to check if the element satisfies the condition.
If the condition evaluates to true, the element is included in the new array.
Common Mistakes:

Forgetting to include a return statement inside the callback function. Without it, the condition will not work as expected, and the result will be an empty arraysss.


to do the same task above by using foreach -> 
const arr = [1,2,3,4,5,6,6,7,8,9,16,5,51,17,119]

const newarr = []

arr.forEach((num)=>{
    if(num>4){
    newarr.push(num)
    }
    }
)
console.log(newarr) ;

3. Map Method(isme bhi call back function lete hai )
The map method is used to transform each element in an array and create a new array with the transformed values.

Key Points:
Syntax:

let newArray = array.map(function(element, index, array) {
    return transformedValue; // The new value for each element
});

const arr = [1,2,3,4,5] 
const newarr = arr.map((num) => num*num)         -> isme ham condition daalke bhi kar sakte hai lekin jaruri nhi hai ki sirf true waali values hi dega filter ki tarah , jo false waali hongi voh bhi de dega 
console.log(newarr)


Example:

let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(function(num) {
    return num * num; // Squares each number
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

How It Works:

The map method iterates over each element of the array.
It applies the callback function to transform the element.
The transformed values are collected into a new array, which is automatically returned.
Key Difference from Filter:

filter is used to select elements based on a condition, while map is used to transform elementssss.
4. Practical Example Combining Filter and Map
The educator demonstrates how to combine filter and map for more complex operations.

Example:
let numbers = [1, 2, 3, 4, 5];
let evenSquares = numbers
    .filter(function(num) {
        return num % 2 === 0; // Filters even numbers
    })
    .map(function(num) {
        return num * num; // Squares the filtered numbers
    });
console.log(evenSquares); // Output: [4, 16]

5. Explanation of Callback Functions
The educator emphasizes the importance of understanding callback functions, as they are central to methods like forEach, filter, and map.

Key Points:
A callback function is a function passed as an argument to another function.
It allows you to customize the behavior of methods like forEach, filter, and map.
Example of Callback Function:
function isEven(num) {
    return num % 2 === 0;
}

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(isEven); // Passes the callback function
console.log(evenNumbers); // Output: [2, 4]

chaining bhi kar sakte hai , map.map.filter , aur kitnii bhi baar kar sakte hai , bas modified array pass on hote rahegi 
*/

/*

*/