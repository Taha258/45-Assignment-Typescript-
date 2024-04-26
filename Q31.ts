// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

 let friends_name:string[] = ["Rehan","Ali","Ahmed"];

 //check if the list of users is not empty
 if (friends_name.length > 0){
//Loop through the array and print each user
 for(let user of friends_name){
     console.log("User:" + user);
 }
 }else{
     console.log("We need to find some users!");
 }
//Remove all usernames from the array
let nullName:string[]=[];

//check if the list of users is not empty after removal
if (nullName.length >0){
    //Loop through the array and print each user
    for(let user of nullName){
        console.log("User:"+ user);
    }
}else {
    console.log("We need to find some users!");
}