// var vs let
// 1. var is globally scoped where let and const are block scoped
// 2. var can be updated and re-declared within its scope 
// 3. let can be updated but not re-declared 
// 4. const cannot be updated nor be re-declared
// 5. var variables are initialized with undefined whereas let and const variables are not initialized
// 6. const must be declared during declaration unlike let and var 

// var
var a = "siyan";
var a = 5;

{
    a = "gaming";       // var will be updated and re-declared
    console.log(a);     // all value of a will change
}

console.log(a);

// let
let c = "siyan";

{
    let c = "gaming";
    console.log(c);
}

console.log(c);

// const
const con = "siyan";

// con = "gaming";  this is not allowed here becoz const can never be updated and re-declared

console.log(con);