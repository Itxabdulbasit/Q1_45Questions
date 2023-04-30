"use strict";
function makeshirt(message = "I love TypeScript", size = "large") {
    console.log(`Printing "${message}" on a ${size}-sized T-shirt.`);
}
makeshirt();
makeshirt("Hello, World!");
makeshirt("Hello, TypeScript!", "medium");
makeshirt("Hello, TypeScript!", "small");
