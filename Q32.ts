// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users: string[] = ["rehan", "ali", "ahmed", "zahid", "umer"];
let new_users: string[] = ["ubaid", "usaid", "rehan", "umer", "akber"];

for (let new_username of new_users) {
    // Convert both the new username and existing usernames to lowercase for case-insensitive comparison
    let lowercase_new_username = new_username.toLowerCase();
    let found = false;

    // Check if the lowercase version of the new username exists in the current_users array
    for (let existing_username of current_users) {
        if (existing_username.toLowerCase() === lowercase_new_username) {
            found = true;
            break;
        }
    }

    // Print messages based on whether the username is available or not
    if (found) {
        console.log(`Username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_username}' is available.`);
    }
}