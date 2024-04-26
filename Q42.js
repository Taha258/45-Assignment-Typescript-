// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Create an array of magician's names
var magicians1 = ['Akber ali', 'Haris', 'zahid'];
function show_magicians(magicians1) {
    magicians1.forEach(function (magician1) { return console.log(magician1); });
}
function make_great(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the Great " + magicians1[i];
    }
}
// Call make_great() to modify the array of magicians
make_great(magicians1);
// Call show_magicians() to see that the list has been modified
show_magicians(magicians1);
