// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Copy excercise 15
var guestlist2 = ["Taha", "Ubaid", "Faisal"];
//Person who can not attend dinner.
var canNotCome = guestlist2[0];
//now print a message with person name.
//console.log(canNotCome +" " + "can not make the dinner");
//New person who attend dinner.
var person = "Amjad";
// Replacing the name into the array.
guestlist2[guestlist2.indexOf(canNotCome)] = person;
//Message Print your new message to your invited guest.
guestlist2.forEach(function (name) {
    console.log("Dear,".concat(name, " I found a bigger dinner so i invited more guest."));
});
//beggining guest
var name1 = "Hasan";
guestlist2.unshift(name1);
console.log(guestlist2);
//Middle guest
var name2 = "Anas";
var index = guestlist2.length / 2;
guestlist2.splice(index, 0, name2);
console.log(guestlist2);
// End guest
var name3 = "Ahmed";
guestlist2.push(name3);
//now print one more message to each guest.
guestlist2.forEach(function (name) {
    console.log("Dear,".concat(name, " you are invited for Dinner"));
});
