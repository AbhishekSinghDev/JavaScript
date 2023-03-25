// ques 1
console.log("har\"".length);

// ques 2
let string = "life is good but not good";
console.log(string.startsWith("life"));     // check weither the string starts with the provided string or not
console.log(string.endsWith("not good"));   // similarly check weither the string ends with the provided string or not
console.log(string.includes("good"));       // basically, search the provided string into the string

// ques 3
let s = "THIS IS A STRING GOING TO CONVERT IN LOWER CASE";
console.log(s.toLowerCase());

// ques 4
let amt = "please give rs 1000";
let ans = amt.slice("please give rs ".length);
console.log(ans);

// ques 5
let st = "this is a string";
st[4] = "m";                    // this cannot change the string becoz string is immutable in javascript
console.log(st);