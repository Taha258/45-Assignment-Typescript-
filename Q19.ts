// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestlist3:string[]=["Taha","Ubaid","Faisal"];
let canNotCome2:string="Taha"
//console.log(canNotCome +" " + "can not make the dinner");
let person2:string="Amjad";
// Replacing the name into the array.
guestlist3[guestlist3.indexOf(canNotCome2)]=person2
guestlist3.forEach(name=>{
    //console.log(`Dear,${name} I found a bigger dinner so i invited more guest.`);
});
//beggining guest
let name4:string="Hasan";
guestlist3.unshift(name4)
//console.log(guestlist2)
//Middle guest
let name5:string="Anas";
let index1=guestlist3.length/2;
guestlist3.splice(index1,0,name5);

// End guest
let name6:string="Ahmed";
guestlist3.push(name6);
//console.log(guestlist2);
//now print one more message to each guest.
guestlist3.forEach(name=>{
    //console.log(`Dear,${name} you are invited for Dinner`);
});

console.log(guestlist3.length+" "+ "guest"+ " "+"are invited for a dinner.")