"use strict";
class Shirt {
    constructor(size, message) {
        this.size = size;
        this.message = message;
    }
    print_message() {
        console.log(this.message);
    }
}
function MakeShirt(size = "large", message = "I love TypeScript") {
    return new Shirt(size, message);
}
const large_shirt = MakeShirt();
console.log(`Size: ${large_shirt.size}`);
large_shirt.print_message();
const medium_shirt = MakeShirt("medium");
console.log(`Size: ${medium_shirt.size}`);
medium_shirt.print_message();
const custom_shirt = MakeShirt("small", "Hello, world!");
console.log(`Size: ${custom_shirt.size}`);
custom_shirt.print_message();
