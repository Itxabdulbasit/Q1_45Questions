const current_users: string[]= ["Admin", "Eric", "John", "Jane", "Alice"];
const new_users: string[]= ["John", "Carl", "emily", "Jane", "Lucas"];

for (const new_user of new_users){
    const username_taken = current_users.some(user => user.toLowerCase()===new_user.toLowerCase())
    if(username_taken){
        console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
        }else{
            console.log(`Congratulations, the username "${new_user} is availible!`);
        }
    }