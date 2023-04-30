function makeSandwich(...ingredients: string[]): void {
    console.log(`Making a sandwich with: ${ingredients.join(", ")}`);
  }
  
  makeSandwich("turkey", "lettuce", "tomato", "mayo");
  makeSandwich("peanut butter", "jelly");
  makeSandwich("ham", "cheese");
  