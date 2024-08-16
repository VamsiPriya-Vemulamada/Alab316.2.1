const app =document.getElementById("app")
// const gamebox = document.createElement("table");

const randomnumber = Math.trunc(Math.random()*100+1) // trunc always takes the base number, Math.random() is method which picks a random number which picks always number b/w 0 and 1
// Floor always picks the lower integer. Truncate simply chops off the fractional part. In other words, it writes out the number in positional notation and stops at the decimal point, using that integer as the new value. This occurs because truncation does not involve the sign of a number, but the floor calculation does.

console.log(randomnumber);
// create Prompt for user to guess
//  setTimeout(() => { 
//    console.log("this is a throw away message");
    
// }, timeout);

window.alert("hi there, Please guess the number between 1 and 100"); // this for window notification
let guess 
console.log(guess);
do {
guess = parseInt(window.prompt("pick a number 1-100"))
if (randomnumber === guess){
    output = `You guessed right`
}
else{
output = `sorry! Wrong Guess`
}
window.alert(output)
}

while( randomnumber !== guess);
