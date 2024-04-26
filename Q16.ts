// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//Copy excercise 15

let guestlist2:string[]=["Taha","Ubaid","Faisal","Dilshad"];
//Person who can not attend dinner.
let canNotCome:string=guestlist2[0]
//now print a message with person name.
//console.log(canNotCome +" " + "can not make the dinner");
//New person who attend dinner.
let person:string="Amjad";
// Replacing the name into the array.
guestlist2[guestlist2.indexOf(canNotCome)]=person
//Message Print your new message to your invited guest.
guestlist2.forEach(name=>{
    console.log(`Dear,${name} I found a bigger dinner so i invited more guest.`);
});
//beggining guest
let name1:string="Hasan";
guestlist2.unshift(name1)
console.log(guestlist2)
//Middle guest
let name2:string="Anas";
let index=guestlist2.length/2;
guestlist2.splice(index,0,name2);
console.log(guestlist2)
// End guest
let name3:string="Ahmed";
guestlist2.push(name3);
//now print one more message to each guest.
guestlist2.forEach(name=>{
    console.log(`Dear,${name} you are invited for Dinner`);
});
 