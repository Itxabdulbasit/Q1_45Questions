let Age: number = 25;
if(Age<2){
    console.log("Person is Baby");
}else if (Age<4 && Age>2){
    console.log("Person is Toddler");
}else if(Age<13 && Age>4){
    console.log("Person is Kid");
}else if(Age<20 && Age>13){
    console.log("Person is Teenager");
}else if (Age<65 && Age>20){
    console.log("Person is Adult");
}else if (Age>65){
    console.log("Person is Elder");
}