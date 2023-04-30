"use strict";
let placesToVisit = ["Japan", "Egypt", "Australia", "Iceland", "Brazil"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:");
console.log([...placesToVisit].sort());
// Show that the original order is still intact
console.log("Original order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without modifying the actual list
console.log("Reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Show that the original order is still intact
console.log("Original order:");
console.log(placesToVisit);
// Reverse the order of the list and print it
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
// Reverse the order of the list again and print it
placesToVisit.reverse();
console.log("Original order:");
console.log(placesToVisit);
// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Alphabetical order:");
console.log(placesToVisit);
