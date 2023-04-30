let string1 = "hello";
let string2 = "world";
let number1 = 10;
let number2 = 5;
let array1 = ["apple", "banana", "orange"];
let array2 = ["car", "bike", "boat"];

console.log(`Is string1 equal to string2? I predict False.`);
console.log(string1 == string2);

console.log(`Is string1 not equal to string2? I predict True.`);
console.log(string1 != string2);

console.log(`Is string1 lowercase? I predict True.`);
console.log(string1.toLowerCase() == "hello");

console.log(`Is string2 lowercase? I predict False.`);
console.log(string2.toLowerCase() == "world");

console.log(`Is number1 greater than number2? I predict True.`);
console.log(number1 > number2);

console.log(`Is number1 less than or equal to number2? I predict False.`);
console.log(number1 <= number2);

console.log(`Is number1 equal to number2? I predict False.`);
console.log(number1 == number2);

console.log(`Is number1 not equal to number2? I predict True.`);
console.log(number1 != number2);

console.log(`Is string1 equal to 'hello' and number1 greater than number2? I predict True.`);
console.log(string1 == "hello" && number1 > number2);

console.log(`Is string2 equal to 'world' or number1 less than number2? I predict True.`);
console.log(string2 == "world" || number1 < number2);

console.log(`Is 'apple' in array1? I predict True.`);
console.log(array1.includes("apple"));

console.log(`Is 'boat' in array1? I predict False.`);
console.log(array1.includes("boat"));

console.log(`Is 'bike' not in array2? I predict False.`);
console.log(!array2.includes("bike"));

console.log(`Is 'train' not in array2? I predict True.`);
console.log(!array2.includes("train"));
