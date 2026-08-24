// // calculate sum of first "n"  numbers

// let number = Number(prompt("enter the range"));
// let sum = 0;

// for(i = 1; i <= number; i++){
//     sum += i;
// }
// console.log(sum);


// // calculate the sum of numbers from "m"  to 'n'.

// let StartingNumber = Number(prompt("From where you want to start ?"));
// let EndingNumber = Number(prompt("From where you want to end ?"));

// let sum = 0;

// for(i = StartingNumber; i <= EndingNumber; i++){
//     sum += i;
// }
// console.log(sum);

// //simple password checker with fixed attempts

// let Password = Number(prompt("Set your password"));

// for(i = 2; i>=0; i--){
//     let check = Number(prompt(`enter your password (${i+1} attempts left)`));
//     if(Password !== check){
//         console.log(`${i+1} attempts left`);
//     }
//     else{
//         console.log("You got access");
//         break;
//     }
// }

// // create a program to find the factorial of 'n'

// let number = Number(prompt("Enter the number"));
// let factorial = 1;

// for(let i = number; i >= 1; i-- ){
//     factorial *= i;
// }
// console.log(factorial);



// // number knock game:

// let computerNumber = 856485;
// let guess = null;

// while(guess !== computerNumber){
//     guess = Number(prompt("Enter correct number: "))

//     if(isNaN(guess)){
//         alert("Number is invalid, please try again!");
//     }else if(guess < computerNumber){
//         alert("Number is low!, please try again!");
//     }else if(guess > computerNumber){
//         alert("Number is high, please try again!");
//     }else{
//         alert("Congratulation!.. Your guess is correct!!");
//     }
// }


// // // basic pattern printing

// // // let row = Number(prompt("Enter the number of row"));
// let row = 6;

// for(let i = 1; i <= row; i++){
//     let str = "";
//     for(let j = 1; j <= i; j++){
//       str = str + j;
//     }
//     console.log(str)
// }

//adventure game

// question 8:


let playAgain = 'yes';

while (playAgain === 'yes') {
    alert("You wake up in the dark forest!");

    let userChoice = prompt("Do you want to go left or right? ");

    if (userChoice === 'left') {
        alert("You see something shiny in the mud!");
        userChoice = prompt("Do you pick it up? (yes or no) ");
        if (userChoice === 'yes') {
            alert("It is a magical stone! you are teleported to safety, you win!");
        } else {
            alert("you dead!!")
        }
    } else {
        alert("you find a cave!");
        userChoice = prompt("Do you enter the cave? (yes or no) ")
        if (userChoice === 'yes') {
            alert("you barely escape!")
        } else {
            alert("You escape");
        }
    }

    userChoice = prompt("Do you want to play again? (yes or no)")
    if(userChoice === 'no'){
        playAgain = 'no';
        alert("Thanks for playing!")
    }
}
