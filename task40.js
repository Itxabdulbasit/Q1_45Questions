"use strict";
function make_album(artist, title, tracks) {
    const album = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("Taylor Swift", "Folklore");
console.log(album1);
const album2 = make_album("Ed Sheeran", "÷ (Divide)", 12);
console.log(album2);
const album3 = make_album("Beyoncé", "Lemonade", 13);
console.log(album3);
