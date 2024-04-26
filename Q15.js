// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//Repeat an array of 'guestlist'with people you would like to invite to dinner.
var guestlist = ["Taha", "Ubaid", "Faisal"];
//Person who can not attend dinner.
var canNotCome = guestlist[0];
//now print a message with person name.
console.log(canNotCome + " " + "can not make the dinner");
//New person who attend dinner.
var person = "Amjad";
// Replacing the name into the array.
guestlist[guestlist.indexOf(canNotCome)] = person;
//Now print a message to all in my list
guestlist.forEach(function (name) {
    console.log("Dear,".concat(name, " you are invited to dinner."));
});
