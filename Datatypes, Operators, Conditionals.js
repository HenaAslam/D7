/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* 
There are 7 different Datatype in JavaScript. All the values in the code(input,output or the partial results stored in variables)
belongs to some Datatype. BasicDatatypes are called PRIMATES. They are : Number,String, Boolean, Undefined,null,Biglnt and Symbol.
Biglnt and Symbol are not important.

Number: It can take values from -(2^53-1) to +(2^53-1). It also contains special values- +infinity and -infinity
(Eg: 50/0). Another value it takes is NaN.(Eg: "string"/number). The Datatype number can take integers as well as floating numbers.
We can do all the Arithmetic and Logical operations on numbers.

String: It is a sequence of characters enclosed in "",'', or ``. + operator is used on strings for concatenation.

Undefined: JavaScript returns this value when we ask to print a variable that has been declared, but not given any value yet.
Its the value of the variable when we declare it.

Null: Its the value of variable that has been emptied. We have to explicitly give in the code, for example, 
let variableName=null;

Boolean: It is a logical entity that takes values True or False. 

JavaScript is loosely typed language, which means a variable can change its datatype as we assign it. So there are chances to have semantic errors
if we don't carefully assign the datatypes.



 */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* A variable is a container for different datatypes. It should have a unique name, which should follow camelCase convention.
We declare a variaable using the keyword let. For example, let theFirstVariable="Hello";
If the variable is declared without giving any value, its content willbe undefined.
To empty a variable we just assign it a null value.

*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/*  
let firstNumber=12;
let secondNumber=20;
console.log("The sum of 12 and 20 is :" ,firstNumber+secondNumber);
*/

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/*
 let x;
x=12;
*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* 
let name;
name="John Doe"
*/

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* let x;
   x=12;
   let sub=x-12;
    console.log("subtraction between the number 12 and the variable x:" , sub);
 */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* 
let name1="john";
let name2="John";
console.log("Verifying if name1 and name2 are different :",name1===name2);
let name3=name2.toLowerCase();
console.log("Verifying that the equality between name1 and name2 becomes true if both are lowercase:", name1===name3);
*/

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* 
let x=7;

let isXOne= x===1;
if(isXOne){
    console.log("One");
}
let isXTwo= x===2;
if(isXTwo){
    console.log("Two");
}
let isXThree= x===3;
if(isXThree){
    console.log("Three");
}
let isXFour= x===4;
if(isXFour){
    console.log("Four");
}
let isXFive= x===5;
if(isXFive){
    console.log("Five");
}
let isXSix= x===6;
if(isXSix){
    console.log("Six");
}
let isXSeven= x===7;
if(isXSeven){
    console.log("Seven");
}
let isXEight= x===8;
if(isXEight){
    console.log("Eight");
}
let isXNine= x===9;
if(isXNine){
    console.log("One");
}

 */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* 
 */
