function makeshirt(message: string = "I love TypeScript", size: string = "large") {
    console.log(`Printing "${message}" on a ${size}-sized T-shirt.`);
  }
  makeshirt();                      
  makeshirt("Hello, World!");    
  makeshirt("Hello, TypeScript!", "medium");
  makeshirt("Hello, TypeScript!", "small"); 
  