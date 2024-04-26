// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//creat a variable.
var alien_color2 = 'green';
//now creat a passing condition
if (alien_color2 === 'green') {
    console.log("Congratulaton! you just earned 5 points for shooting the green alien.");
}
else {
    console.log("Congratulation you just earned 10 points for shooting the non-green alien");
}
//then create a failing condition
var alien_color3 = 'red';
if (alien_color3 === 'green') {
    console.log("Congratulation! you just earned 5 point for shooting the green alien.");
}
else {
    console.log("Congratulation! You just earned 10 points for shooting the non-green alien.");
}
