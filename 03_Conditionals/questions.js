// //question 1 >> choose your color
// let color = 'white';

// let theme = prompt("Choose your theme color (light, dark, pink, green) : ");

// if (theme === 'light') {
//     color = 'white'
// } else if (theme === 'dark') {
//     color = 'black'
// } else if (theme === 'pink') {
//     color = 'pink'
// } else if (theme === 'green') {
//     color = 'green'
// }

// if (theme !== 'light' && theme !== 'dark' && theme !== 'pink' && theme !== 'green') {
//     console.log("invalid theme selection")
// } else {
//     console.log(`Your selected theme is ${theme} and color is ${color} respectively!`);
// }


// //Question 2 >> find the smallest among 3 

// let num1 = Number(prompt("Enter number 1 : "));
// let num2 = Number(prompt("Enter number 2 : "));
// let num3 = Number(prompt("Enter number 3 : "));
// console.log(num1, num2, num3)

// if(num1 < num2 && num1 < num3 ){
//     console.log(`${num1} is smallest`);
// }else if(num2 < num3){
//     console.log(`${num2} is smallest`);
// }else{
//     console.log(`${num3} is smallest`)
// }




// //question no 3 >> role based acess

// let userRole = "CEO  ";

// switch (userRole) {
//     case "admin":
//         console.log("full access");
//         break;
//     case "editor":
//         console.log("editor access");
//         break;
//     case "viewer":
//         console.log("can only view");
//         break;
//     default: console.log("invalid role");
// }



// // question 4:>>>>> whether divided by 3 or 5 or both or not
// let num = 50;

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz")
// } else if (num % 5 === 0) {
//     console.log("Buzz")
// } else if (num % 3 === 0) {
//     console.log("Fizz")
// } else {
//     console.log("neither divisible by 3 nor by 5");
// }


// // question no 5

//  let num1 = Number(prompt("enter 1st number:  "));
//  let num2 = Number(prompt("enter 2nd number:  "));
//  let operator = prompt("enter operator:  ");


//  switch(operator){
//     case "+":
//         console.log(`${num1} ${operator} ${num2} = ${num1 + num2}`);
//         break;
//     case "-":
//         console.log(`${num1} ${operator} ${num2} = ${num1 - num2}`);
//         break;
//     case "*":
//         console.log(`${num1} ${operator} ${num2} = ${num1 * num2}`);
//         break;
//     case "/":
//         console.log(`${num1} ${operator} ${num2} = ${num1 / num2}`);
//         break;
//     default:
//            console.log("invalid operator");
//  } 


//  //question 6 >> basic ATM machine
//  let baseAmount = 10000;
//  let operation = Number(prompt("Choose a option 1.Check Balance 2.Deposit 3.withdraw 4.exit"));
 
//  switch(operation){
//     case 1:
//         console.log(baseAmount);
//     break;
//     case 2:
//          let depositAmount = Number(prompt("Enter the amount You want to deposit"));
//          baseAmount += depositAmount;
//          console.log(baseAmount);
//     break;
//     case 3:
//         let withdrwalAmount = Number(prompt("Enter the amount You want to withdraw"));
//         if(withdrwalAmount > baseAmount){
//             console.log("Insufficieant Balance");
//         }else{
//             baseAmount -= withdrwalAmount;
//         }
//         console.log("your remaining balance is", baseAmount);
//         break;
//     case 4:
//          console.log("Thank You for your time");
//          break;
        
//  }


 
 