// function greetUser(firstName, lastName) {
//     alert("Hello " + firstName + " " + lastName);
// }
// greetUser("Muhammad", "Talha Ali");

// Switch Statement

// var userInput = prompt("Enter your city");

// userInput = userInput.slice(0,3).toLowerCase();

// switch(userInput){

//     case 'mon':
//         alert("Monday is working day...");
//         break;

//     case 'tue':
//         alert("Tuesday is working day...");
//         break;

//     case 'wed':
//         alert("Wednesday is working day...");
//         break;

//     case 'thu':
//         alert("Thursday is working day...");
//         break;

//     case 'fri':
//         alert("Friday is working day...");
//         break;

//     case 'sat':
//         alert("Saturday is holiday...");
//         break;

//     case 'sun':
//         alert("Sunday is family day...");
//         break;

//     default :
//         alert("Invalid input...");
// }

// For Loop

// for ( var i = 0; i <= 5; i++){
//     console.log(i);
// }

// While Loop

// var i = 0;

// while(i<=5){
//     console.log(i);
//     i++;
// }

// var arr = ['Talha',100,true,undefined];

// var i = 0;

// while(i< arr.length){
//     console.log(arr[i]);
//     i++;
// }

// Multiplication table using while loop

// var userInput = +prompt("Enter table no");

// var range = +prompt("Enter range");

// var i = 1;

// while (i <= range ){
//     table = userInput * i;
//     document.write(userInput + "*" + i + "=" + table + "<br>");
//     i += 1;
// }

// var userInput = prompt("Enter any word");

// var reservedWord = "";

// var i = userInput.length - 1;

// while ( i >= 0){
//     reservedWord += userInput[i];
//     i--;
// }

// if(userInput === reservedWord){
//     console.log("Its a Palindrome word")
// } else {
//     console.log("Its not a Palindrome word")
// }


// Do-While Loop

// var i = 0;
// do {
//     alert(i);
//     i++;
// } while(i <= 5);

// var arr = ['Talha',100,true,undefined];

// var i = 0;
// do {
//     alert(i);
//     i++;
// } while(i < arr.length);


// var userInput = prompt("Enter any word");

// var reservedWord = "";

// var i = 0;
// do {
//   reservedWord = reservedWord + userInput(i);
//   alert(reservedWord);
//   i--;
//  } while(i < userInput.length);


//  var userInput = +prompt("Enter table no");

//  var range = +prompt("Enter range");

//  var i = 1;

//  do{
//     document.write(`${userInput} * ${i} = ${userInput * i}`);
//     i++;
//  } while(i <= range);

// function greet() {
// alert("Hello ");
// }

// function submit() {
//     Swal.fire({
//         title: "Good job!",
//         text: "Your Form has been submitted!",
//         icon: "error"
//       });
//  }

 function greet(message) {
    Swal.fire({
        title: "Good job!",
        text: message,
        icon: "success"
      });
 }
    
    

 


