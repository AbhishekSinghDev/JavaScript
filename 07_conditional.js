let a = prompt("Enter your age: ");     // be default input value is of string type
a = Number.parseInt(a);     // simple type casting to integer

if(a>0) {
    alert("Valid age! ");
}
else {
    alert("Invalid age! ");
}

// program to check wheather a user age is valid for driving or not
let age = prompt("Enter you age: ");
age = Number.parseInt(age);

if(age>0 && age<18) {
    alert("Sorry! you are to small to drive :( ");
    console.log("Sorry! you are to small to drive :( ");
}
else if(age>18 && age<55) {
    alert("You are legally eligible to drive ");
    console.log("You are legally eligible to drive ");
}
else {
    alert("You cannot drive, sorry!");
    console.log("You cannot drive, sorry!");
}