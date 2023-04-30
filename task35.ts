const Animals: string[]=["Cat", "Cat", "Rabbit"];

for(const Animal of Animals){
    console.log(Animal);
}
for (const Animal of Animals){
    console.log(`A ${Animal.toLowerCase()} would make a great Pet.`);
}

console.log(`Any of These three Animals are good pets!`);