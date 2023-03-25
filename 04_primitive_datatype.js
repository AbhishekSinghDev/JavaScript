// nn bb ss uu
// primitive data types in javascript
let a = null;
let b = 67;
let c = true;
let d = BigInt("653") + BigInt("7");
let e = "abhishek";
let f = Symbol("This is a symbol");

console.log(a, b, c, d, e, f);
console.log(typeof b);

// objects
const details = {
    "abhishek": 43,
    "ayush": 50,
    "narender": 90
}
console.log(details.abhishek);  // 1way to print 
console.log(details["ayush"]);  // 2way to print
