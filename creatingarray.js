let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Display the complete array
console.log("Fruits:", fruits);

// Access array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);
console.log("Fourth fruit:", fruits[3]);

// Change an element
fruits[1] = "Grapes";

console.log("After changing:", fruits);

// Add an element
fruits.push("Watermelon");

console.log("After adding:", fruits);

// Remove the last element
fruits.pop();

console.log("After removing:", fruits);

// Array length
console.log("Number of fruits:", fruits.length);