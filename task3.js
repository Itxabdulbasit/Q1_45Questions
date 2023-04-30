"use strict";
// let person1Name : string = 'Hassan';
// console.log("Lower Case: " + person1Name.toLocaleLowerCase);
// console.log("Upper Case: " + person1Name.toUpperCase);
// function toTitleCase(str: string): string {
//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});}
// console.log("Title Case: " + person1Name.toTitleCase(person1Name));
let person1Name = "John Doe";
console.log("Lowercase: " + person1Name.toLowerCase());
console.log("Uppercase: " + person1Name.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
console.log("Titlecase: " + toTitleCase(person1Name));
