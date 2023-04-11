// Question 01

// let num1 = parseInt(prompt("Enter number1:"));
// let num2 = parseInt(prompt("Enter number2:"));


// if(isNaN(num1) || isNaN(num2)){
//     console.log("Any of the numbers are not entered.");
// } else{
//     if(num1 > num2){
//         console.log("number1: " + num1 + " is larger.");
//     } else{
//         console.log("number2: " + num2 + " is larger.");
//     }
// } 

// Question 02

// let number = parseInt(prompt("Enter number:"));

// if(isNaN(number)){
//     alert("Number is not entered");
// }else if(number > 0){
//     alert("The sign is +");
// } else if(number < 0){
//     alert("The sign is -");
// } else{
//     alert("The number entered is 0")
// }

// Question 03

// let num1 = parseInt(prompt("Enter number1:"));
// let num2 = parseInt(prompt("Enter number2:"));
// let num3 = parseInt(prompt("Enter number3:"));
// let num4 = parseInt(prompt("Enter number4:"));
// let num5 = parseInt(prompt("Enter number5:"));


// if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)){
//     console.log("Any of the numbers are not entered.");
// } else{
//     let max = num1;
//     if (num2 > max) {
//       max = num2;
//     }
//     if (num3 > max) {
//       max = num3;
//     }
//     if (num4 > max) {
//       max = num4;
//     }
//     if (num5 > max) {
//       max = num5;
//     }

// console.log("The largest number is: " + max);
// }

// Question 04

// for(let i = 0; i <= 15; i++){
//     if(i % 2 == 0){
//         document.write(i + " is even<br>");
//     } else{
//         document.write(i + " is odd<br>");
//     }
// }

// Question 05

// let userNum = parseInt(prompt("Enter your marks:"));

// if(userNum > 100){
//     alert("Total number is 100, should be less than 100")
// } else{
// if(userNum <= 100 && userNum >= 90){
//     alert("User grade is A");
// }
// if(userNum < 90 && userNum >= 80){
//     alert("User grade is B");
// }
// if(userNum < 80 && userNum >= 70){
//     alert("User grade is C");
// }
// if(userNum < 70 && userNum >= 60){
//     alert("User grade is D");
// }
// if(userNum < 60){
//     alert("User grade is F");
// }    
// }

// Question 06

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
// }

// Question 07

// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
// }