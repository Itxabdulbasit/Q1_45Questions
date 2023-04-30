"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const great_magicians = [];
    for (const magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
const magicians = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];
const great_magicians = make_great([...magicians]);
show_magicians(magicians);
show_magicians(great_magicians);
