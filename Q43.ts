// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians4(magiscians4:string[]):void{
    magiscians4.forEach(magiscians1=>
        console.log(magiscians1));
}

function make_great2(magiscians4:string[]):string[] {
return magiscians4.map(magician=>"The Great" + magician);    
}
//Define an array of magician's names
let magiscians4:string[] = ['Akber ali','Haris','Zahid'];

let great_magicians5:string[] = make_great2([...magiscians4]);
//call show_magicians4() to show the original array of magician's names
console.log("Original magicians:");
show_magicians4(magiscians4);

//call show_magicians4() to show the array with "the Great" added to each magician names
console.log("n\Great magician:");
show_magicians4(great_magicians5);



