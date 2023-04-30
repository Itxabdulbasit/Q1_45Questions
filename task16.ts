let guest_List: string[] = ["Hassan", "Ahtisham", "Khubaib"];
console.log(`Original guest list: ${guest_List.join(", ")}`);

const unable_To_Attend = guest_List.splice(1, 1);
console.log(`${unable_To_Attend[0]} can't make it to dinner.`);

guest_List.unshift("Abdul Hameed");
guest_List.splice(2, 0, "Umair Shehzad");
guest_List.push("SK or Sohail Khan");

console.log("Good news, everyone! I found a bigger dinner table!");

for (const guest of guest_List) {
  console.log(`Dear ${guest}, you are cordially invited to dinner at my house. Please let me know if you can attend.`);
}
