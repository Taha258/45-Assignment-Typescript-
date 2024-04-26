// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var friends_name = ["Rehan", "Ali", "Ahmed"];
//check if the list of users is not empty
if (friends_name.length > 0) {
    //Loop through the array and print each user
    for (var _i = 0, friends_name_1 = friends_name; _i < friends_name_1.length; _i++) {
        var user = friends_name_1[_i];
        console.log("User:" + user);
    }
}
else {
    console.log("We need to find some users!");
}
//Remove all usernames from the array
var nullName = [];
//check if the list of users is not empty after removal
if (nullName.length > 0) {
    //Loop through the array and print each user
    for (var _a = 0, nullName_1 = nullName; _a < nullName_1.length; _a++) {
        var user = nullName_1[_a];
        console.log("User:" + user);
    }
}
else {
    console.log("We need to find some users!");
}
