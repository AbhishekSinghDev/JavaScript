// Ques 1
let age = 11;
if(age>10 && age<=20) {
    console.log("In between 10 and 20");
}
else {
    console.log("Not in between 10 and 20");
}

// Ques 2
let num = 1;
switch(num) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
        break;
    default:
        console.log("out of five count");
}

// Ques 3
let n = 12;
if(n%2 == 0 && n%3 == 0) {
    console.log("divisible by both 2 and 3");
}
else {
    console.log("not divisible by 2 and 3");
}

// Ques 4
let n1 = 26;
if(n1%2 == 0 || n1%3 == 0) {
    console.log("divisible by either of 2 and 3");
}
else {
    console.log("not divisible by 2 and 3");
}

// Ques 5
let age1 = 21;
console.log("you can", (age1<18? "not drive" : "drive"));