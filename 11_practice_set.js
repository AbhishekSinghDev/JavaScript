// ques 1
const marks = {
    "harry": 98,
    "rohan": 70,
    "aakash": 7
}
for(let i=0; i<Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i] + ": " + marks[Object.keys(marks)[i]]);
}

// ques 2
for(let x in marks) {
    console.log(x + ": " + marks[x]);
}

// ques 3
let correctNumber = 10;
var num;
do {
    num = prompt("Enter the number: ");
    num = Number.parseInt(num);
} while(num != correctNumber);

// ques 4
function mean(a, b, c, x, y) {
    return (a+b+c+x+y) / 5;
}
console.log("Mean of 5number: ", mean(5,6,10,4,2));