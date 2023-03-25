// 1 way to implement functions in javascript
function factorial(x) {
    let fact = 1;
    for(let i=1; i<=x; i++) {
        fact *= i;
    }
    return fact;
}

// 2 way to implement functions in javascript
const sum = (x, y) => {
    return x + y;
}

let num = 5;
console.log(factorial(num));

console.log(sum(9, 9));