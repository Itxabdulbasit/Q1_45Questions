"use strict";
function ShowMagicians(Magicians) {
    for (const Magician of Magicians) {
        console.log(Magician);
    }
}
function Make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        Magicians[i] = `the Great ${magicians[i]}`;
    }
}
const Magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
Make_great(Magicians);
ShowMagicians(Magicians);
