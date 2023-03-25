// Airthmatic operator
let a = 10;
let b = 2;
console.log("a + b: ", a+b);
console.log("a - b: ", a-b);
console.log("a * b: ", a*b);
console.log("a / b: ", a/b);
console.log("a++ :", a++);
console.log("a--: ", a--);
console.log("--a: ", --a);
console.log("++a: ", ++a);

// Assignment operator
let c = 10;
let d = 9;
c += d  // c = c + d
c -= d  // c = c - d
c *= d  // c = c * d
c /= d  // c = c / d
c %= d  // c = c % d
c **= d // c = c ** d
console.log("c: ",c);

// Comparsion operator
let e = 10;
let f = 7;
console.log("e == f: ", e == f);
console.log("e != f: ", e != f);
console.log("e === f: ", e === f);  // equal value and equal type
console.log("e !== f: ", e !== f);  // not equal value and not equal type
console.log("e > f: ", e > f);
console.log("e < f: ", e < f);
console.log("e <= f: ", e <= f);
console.log("e >= f: ", e >= f);

// Logical operator
let g = 5;
let h = 6;
console.log(g>h && g==h)    // prints true only if both the condition is true
console.log(g<h || g==h)    // prints true either of any condition is true
console.log(!false)         // not gate simply invert the false to true
console.log(!true)          // inverts true to false

// Turnary operator
let i = 48;
console.log("You can", (i<18? "not drive" : "drive"));      // left statement executed only when condition is true else right is executed
