// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians4(magiscians4) {
    magiscians4.forEach(function (magiscians1) {
        return console.log(magiscians1);
    });
}
function make_great2(magiscians4) {
    return magiscians4.map(function (magician) { return "The Great" + magician; });
}
//Define an array of magician's names
var magiscians4 = ['Akber ali', 'Haris', 'Zahid'];
var great_magicians5 = make_great2(__spreadArray([], magiscians4, true));
//call show_magicians4() to show the original array of magician's names
console.log("Original magicians:");
show_magicians4(magiscians4);
//call show_magicians4() to show the array with "the Great" added to each magician names
console.log("n\Great magician:");
show_magicians4(great_magicians5);
