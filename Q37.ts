// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt2(size:string,message:string):void {
    console.log(`you have ordered a ${size}-size shirt with the message:"${message}".`)
}
//calling the function
make_shirt2("Large","I love Typescript");
//Create a medium shirt with the default message
make_shirt2('Medium',"I love Typescript");

//Create a shirt of any size with a different message
make_shirt2(`small`,`keep calm and code on!`);