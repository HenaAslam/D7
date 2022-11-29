let firstNumber=12;
let secondNumber=20;
console.log("The sum of 12 and 20 is :" ,firstNumber+secondNumber);




let name;
name="John Doe"



//let sub=x-12;
//console.log("subtraction between the number 12 and the variable x:" , sub);

let name1="john";
let name2="John";
console.log("Verifying if name1 and name2 are different :",name1===name2);
let name3=name2.toLowerCase();
console.log("Verifying that the equality between name1 and name2 becomes true if both are lowercase:", name1===name3);


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


let firstInteger=7;
let secondInteger=16;
let isEight= firstInteger===8 || secondInteger===8;
let add= firstInteger + secondInteger === 8;
let minus= firstInteger - secondInteger === 8;
let result= isEight || add || minus;
console.log("the value of one of them is 8 or if their addition or subtraction is equal to 8:",result);


let firstName="Hena";
let lastName="Asslam";
let fullName=firstName+lastName;
console.log("The full name is", fullName);

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

let firstInt=5;
let secondInt=10;
let avg=(firstInt+secondInt)/2;
console.log("The average is", avg);

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


let num=14;
let intCheck=num%2 === 1 || num%2 ===0;
if(intCheck){
    console.log("Integer");
}
else{
    console.log("Not Integer");
}

let theNum=300;
let perc=10;
let res= (perc/100)*theNum;
console.log("The percentage is:", res);