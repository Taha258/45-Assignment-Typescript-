// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
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
console.log(guestlist3.length + " " + "guest" + " " + "are invited for a dinner.");
