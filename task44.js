"use strict";
function makeSandwich(...ingredients) {
    console.log(`Making a sandwich with: ${ingredients.join(", ")}`);
}
// call the function with different number of arguments
makeSandwich("turkey", "lettuce", "tomato", "mayo");
makeSandwich("peanut butter", "jelly");
makeSandwich("ham", "cheese");
