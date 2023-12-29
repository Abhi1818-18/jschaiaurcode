const cars = ["Porsche","jaguar","mclaren"]
//An array can hold many values under a single name, and you can access the values by referring to an index number.
//console.log(cars);

let car = cars[1];
//console.log(car);
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon"); //adds lemon element to array at last position
//console.log(fruits);

const fruits1 = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";  // Creates undefined "holes" in fruits
//console.log(fruits1);

//In JavaScript, arrays always use numbered indexes.
// If you use named indexes, JavaScript will redefine the array to an object.  
/*
When to Use Arrays. When to use Objects.
JavaScript does not support associative arrays.
You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.
*/

const cricketers = ["Virat","Rohit","ABD","Dhoni"]
//console.log(cricketers.length); //to check length of array

//console.log(Array.isArray(cricketers)) //to check whether array or not

//console.log(cricketers.toString())//The JavaScript method toString() converts an array to a string of (comma separated) array values.

//console.log(cricketers.join('-')) /*The join() method also joins all array elements into a string.
 //It behaves just like toString(), but in addition you can specify the separator:*/

 let numbers = [1,5,8,3,6]
 let reversedArray = numbers.reverse(); //returns element in reverse order
 console.log(reversedArray);

 console.log(numbers); // reverse method modifies the original array

 let languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

 let reversedArray1 = [...languages].reverse(); //if we use spread operator it doesnt modify original array

 console.log(reversedArray1);
 console.log(languages);

 const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

 const result = words.filter((word)=>word.length>6) 
 console.log(result);

 const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
 