// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/
/*
let gender;
let isMale= true;
gender=(isMale) ?  male:FileSystemHandle;
 */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/
/*
let firstInteger=7;
let secondInteger=16;
let isEight= firstInteger===8 || secondInteger===8;
let add= firstInteger + secondInteger === 8;
let minus= firstInteger - secondInteger === 8;
let result= isEight || add || minus;
console.log("the value of one of them is 8 or if their addition or subtraction is equal to 8:",result);
/* 

 

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/*
 let firstName="Hena";
let lastName="Asslam";
let fullName=firstName+lastName;
console.log("The full name is", fullName); 
*/

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* 
let first=9;
let second=1;
let third=12;

if(first>second && first>third){
    if(second>third){
        console.log(first,second,third);
    }
    else{
        console.log(first,third,second);
    }
}
if(second>first&& second>third){
    if(first>third){
        console.log(second,first,third);
    }
    else{
        console.log(second,third,first);
    }
}
if(third>second && third>first){
    if(second>first){
        console.log(third,second,first);
    }
    else{
        console.log(third,first,second);
    }
}
*/

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* let firstInt=5;
let secondInt=10;
let avg=(firstInt+secondInt)/2;
console.log("The average is", avg);
 */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* 
let strOne="abcdefgh";
let strTwo="asdasdsadssdsasd";
lengOne=strOne.length;
lengTwo=strTwo.length;
if(lengOne>lengTwo){
    console.log(strOne);
}
else{
    console.log(strTwo);
}
*/

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* let num=14;
let intCheck=num%2 === 1 || num%2 ===0;
if(intCheck){
    console.log("Integer");
}
else{
    console.log("Not Integer");
} */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* let theNum=300;
let perc=10;
let res= (perc/100)*theNum;
console.log("The percentage is:", res); */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* let inpNum=10;
let checkModulo=inpNum%2;
if(checkModulo==0){
    console.log("Even");
}
else{
    console.log("Odd");
} */
