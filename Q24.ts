// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// Tests for equality and inequality with strings

let str1 = "Adnan";
let str2 = "Hamid"

console.log(str1 === "Adnan");//True
console.log(str1 === str2);//False

// • Tests using the lower case function

console.log(str1.toLocaleLowerCase() === 'adnan');//True
console.log(str2.toLocaleLowerCase() !== 'hamid');//False

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//Creat variable
let num1 = 10;
let num2 = 5;

console.log(1<2);//True
console.log(num1 === num2);//False
console.log(num2!==num1);//True
console.log(num1<=num2);//False

// • Tests using "and" and "or" operators

//Creat variable
let num3 = 15;
let num4 = 10;

console.log((num3 === 15) && (num3 > num4));//True
console.log((num4 >= num3 ) && (num3 > num4));//False
// || OR
console.log((num3 !== num4) || (num3 == num4));//True
console.log((num3 === 10) || (num4 === 15));//False

//Test when an item is in an array
//creat an array
let array:number[]=[1,2,3,4,5];

console.log("Is 3 in the array? I predict True.");
console.log(array.includes(3));

//Test when an item is not in an array
console.log("Is 8 not in the array? I predict True.");
console.log(!array.includes(8));

