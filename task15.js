"use strict";
let guestList1 = ["Hassan", "Ahstisham", "Khubaib"];
console.log(`Original guest list: ${guestList1}`);
const unableToAttend = guestList1.splice(1, 1);
console.log(`Unfortunately, ${unableToAttend[0]} can't make it to dinner.`);
guestList1.push("Ahtisham");
for (const guest of guestList1) {
    console.log(`Dear ${guest}, you are cordially invited to dinner at my house. Please let me know if you can attend.`);
}
