// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
var my_age = 80;
if (my_age < 2) {
    console.log("I am a baby.");
}
else if (my_age >= 2 && my_age < 4) {
    console.log("The person is a toddler.");
}
else if (my_age >= 4 && my_age < 13) {
    console.log("The person is a Kid.");
}
else if (my_age >= 13 && my_age < 20) {
    console.log("The person is a teenmy_ager.");
}
else if (my_age >= 20 && my_age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder");
}
