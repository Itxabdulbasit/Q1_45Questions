"use strict";
let guests = ["Hassan", "Ahtisham", "Khubaib", "Sajjad"];
console.log("Initial guest list:");
console.log(guests);
console.log("Oh no! The dinner table won't arrive in time for the dinner, and we only have space for two guests.");
while (guests.length > 2) {
    const guest = guests.pop();
    console.log(`Sorry ${guest}, but you are no longer invited to the dinner.`);
}
console.log(`The final guest list is ${guests}`);
for (const guest of guests) {
    console.log(`Dear ${guest}, you are still invited to the dinner!`);
}
guests.pop();
guests.pop();
console.log(`Empty guest list: ${guests}`);
