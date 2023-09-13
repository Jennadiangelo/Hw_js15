//Calculate length of other side a*a + b*b = c*c
//Find c
const a = 5;
const b = 12;
const c = Math.sqrt(a * a + b * b);
console.log("pythagorean:", c);

//+- sign should be present
//Separate thousands with ,

let num = 1232323;
if (num >= 0) {
    console.log("+", num.toLocaleString('en-US'))
} else {
    console.log(num.toLocaleString('en-US'))
}


//+- sign should be present
//Separate thousands with spaces

let num = 1223.65378;
if (num >= 0) {
    console.log("+", num.toLocaleString())
} else {
    console.log(num.toLocaleString())
}


//User enters a number
//Get it's integer part and decimal

const num = 2.34;//("Write here a number");

const check = Math.floor(num);

if (num % check === 0) {
    console.log(`int:${num}`, "decimal: 0");
} else {
    console.log(`int:${check}`, `decimal: ${(num-check).toFixed(3)*1000}`);
}


//Check if given number is a prime number
//Prime numbers are numbers that is divisible without a remainder only by itself and by 1
//Should return boolean

const n = 18;
let isPrime = true;
if (n === 1) {
    console.log("it's 1");
}
if (n > 0) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;}}
if (isPrime) {
    console.log(true);
}else {
    console.log(false);
    }
}