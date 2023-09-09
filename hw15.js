//TASK1
//ax2 + bx + c = 0;
//D = b2 - 4ac;

//const calculate = (a, b, c) => {};

const calculate = (a = 1, b = 5, c = 6) => {
    const task = (a * x * x + b * x + c === 0);
    const D = b * b - 4 * a * c;
        if (D >= 0) {
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);
            const roots = { x1: ${ x1 }, x2: ${ x2 }};//я не розумію, чому воно не дає вставити змінні через $
        
    } else {
        const roots = { x1: null, x2: null };
    }
return roots;
};

    
//TASK2

const factorial = (num) => {
    if (0 <= num <= 1) {
        return 1;
    }
    else if (num > 1) {
        num--;
    result *= num;
    }
    return result;
}

//const result = factorial(5);

//TASK3

const addition = function (a, b) 
{ return (a + b);}
const subtraction = function (a, b) 
{ return (a - b);}
const multiplication = function (a, b) 
{ return (a * b);}
const division = function (a, b) 
{ return (a / b);}

const calculate = function (callback, a, b)
{
const result = callback(a, b);
return result;
};

const result1 = calculate(addition, 1, 1, 1, 1);
const result2 = calculate(subtraction, 20, 10, 5);
const result3 = calculate(multiplication, 2, 10, 2);
const result4 = calculate(division, 20, 10, 2);