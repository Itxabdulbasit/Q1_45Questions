const Usernames: string[] =['Admin', 'Eric', 'John', 'Jane', 'Alice'];

for(const Username of Usernames){
    if(Username === 'Admin'){
        console.log("Hellow Admin, Would you like to see test report?");
    }else{
        console.log(`Thank You ${Username}, Thank you for your logging in again.`);
    }
}