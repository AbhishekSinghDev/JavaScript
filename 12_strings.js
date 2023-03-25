// let a = "abhishek";     // 1st way of creating a string
// console.log(a.length);

// let b = 'abhishek';     // 2nd way of creating a string
// console.log(b.length);

// let c = 'ashish';
// let d = 'siyan';
// console.log(`${c} is friend of ${d}`);      // template literals

// // escape sequence
// console.log('hello world this is javascript\'s program');


// String methods
let n = "Siyan";
let k = " gaming"

console.log(n.toUpperCase());
console.log(n.toLowerCase());
console.log(n.slice(1,4));
console.log(n.slice(1));
console.log(n.concat(k," is gaming name of abhishek"));
console.log(n.replace("Siy", "Giy"));
console.log(n.trim());

// quick quiz
for(let i=0; i<n.length; i++) {
    console.log(n[i]);
}