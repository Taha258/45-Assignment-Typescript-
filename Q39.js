// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
//Calling the function with three city_country pairs
var city1 = city_country('Lahore', 'pakistan');
var city2 = city_country('New york', 'USA');
var city3 = city_country('Paris', 'France');
//printing the values retured by the function
console.log(city1);
console.log(city2);
console.log(city3);
