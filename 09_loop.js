// for loop
// program to find sum of first n natural number
let num = 5;
let sum = 0;
for(let i=1; i<=num; i++) {
    sum += i;
}
console.log("Sum of first n natural number: ", sum);

// program to find factorial of a number
let n = 5;
let fact = 1;
for(let i=1; i<=n; i++) {
    fact *= i;
}
console.log("Factorial of n: ", fact);

// for-in loops in javascript
const student = {
    name: "abhishek",
    class: "bca",
    roll: "071",
    marks: "50"
}
for(let i in student) {
    console.log(i + " : " + student[i]);
}

for(let i of "abhishek") {  // the object must be iterable dict. cannot be iterated using for-of loops
    console.log(i);
}

// while loop
let a = 5;
let i = 0;
while(i<a) {
    console.log(i);     // entry loop also check the condition on entry if true then only be executed else not.
    i++;
}

do {                    // executes one time for sure then checks the condition from next iteration.
    console.log(i);
    i++;
}while(i<a)