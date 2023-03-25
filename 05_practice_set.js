// ques 1
let n = "abhishek";
let res = n + 5;
console.log(res);

// ques 2
console.log(typeof res);

// ques 3
const ob = {
    "name": "abhishek",
    "class": "under-grad",
    "roll": 50
}
ob.roll = 71;
// ob = "rahul";   // we cannot do this becoz ob is already declared

// ques 4
ob["college"] = "iitm";
console.log(ob.college);

// ques 5
const dict = {
    "honest": "aak imandar admi",
    "bad": "aak ganda admi",
    "good": "aak accha admi",
    "water": "pani",
    "milk": "doodh"
}
console.log(dict["milk"]);