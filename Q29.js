// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//Creat an array
var favorite_fruits = ["Banana", "apple", "mango"];
if (favorite_fruits.includes('Banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apple!");
}
if (favorite_fruits.includes('mango')) {
    console.log("You really like mango!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like orange.");
}
else {
    console.log("orange are not in your list of favorite fruits.");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("you really like kiwis!");
}
else {
    console.log("kiwis are not in your list of favorite fruits.");
}
