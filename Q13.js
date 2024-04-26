// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//array of favorite modes of transportation
var transportation = ["125 Bike", "Civic Car", "Landcruser", "BMW", "Mercedes"];
// Print starements about each mode of transportation
transportation.forEach(function (name) {
    console.log("\"I would like to own a ".concat(name, "\""));
});
