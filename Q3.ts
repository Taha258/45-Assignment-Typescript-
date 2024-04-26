// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName :string = "Taha";

console.log("Lowercase:"+personName.toLocaleLowerCase());
console.log("Uppercase:"+personName.toLocaleUpperCase());
let titleCase = personName[0].toLocaleUpperCase() + personName.slice(1).toLocaleLowerCase();
console.log("Titlecase:" + titleCase);
