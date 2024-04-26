// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//Creat an array of magician's names 
let magicians:string[] = ['Akber ali','Haris','Zahid'];
function show_magicians1(magiscians:string[]):void{
    magicians.forEach(magician=>
        console.log(magician));
}
//call the function to show the magicians
show_magicians1(magicians);