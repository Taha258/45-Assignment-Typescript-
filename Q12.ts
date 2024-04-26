// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

//Repeat array Exercise 11
let fNames:string[]=["Taha","Ubaid","Hasnain","Ahmed"];
//Print a Personalized message to each friend

fNames.forEach(name =>{
    console.log(`Dear,${name} What are you doing?`)
})