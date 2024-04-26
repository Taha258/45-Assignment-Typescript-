// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// // • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Copy excercise 16
var guestlist3 = ["Taha", "Ubaid", "Faisal"];
var canNotCome2 = "Taha";
//console.log(canNotCome +" " + "can not make the dinner");
var person2 = "Amjad";
// Replacing the name into the array.
guestlist3[guestlist3.indexOf(canNotCome2)] = person2;
guestlist3.forEach(function (name) {
    //console.log(`Dear,${name} I found a bigger dinner so i invited more guest.`);
});
//beggining guest
var name4 = "Hasan";
guestlist3.unshift(name4);
//console.log(guestlist2)
//Middle guest
var name5 = "Anas";
var index1 = guestlist3.length / 2;
guestlist3.splice(index1, 0, name5);
// End guest
var name6 = "Ahmed";
guestlist3.push(name6);
//console.log(guestlist2);
//now print one more message to each guest.
guestlist3.forEach(function (name) {
    //console.log(`Dear,${name} you are invited for Dinner`);
});
// // Print first line of exercise 17.
console.log("I have space for only 2 guest");
//remove guest by using while loop & pop
console.log(guestlist3);
while (guestlist3.length > 2) {
    var removePerson = guestlist3.pop();
    //print message for those who can't invite
    console.log("Dear,".concat(removePerson, " sorry,I can't invite you for a dinner"));
}
//print message for those who can not invite
guestlist3.forEach(function (name) {
    console.log("Dear,".concat(name, " you are still invited to dinner!"));
});
//Creat empty list and print it 
guestlist3.pop();
guestlist3.pop();
console.log(guestlist3);
