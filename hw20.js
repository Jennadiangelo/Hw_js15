/*Create arr method
Create obj with property from and to
Create function createArr that reads obj properties and
Creates new sorted arr with range from and to
Assign this arr as obj property

Create 3 solutions Solution 1 without bind, call or apply
Solution 2 with bind Solution 3 with call or apply*/

const obj = { from: 1, to: 10 };

function createArr() {
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
    obj.arr = arr;
    console.log(obj.arr);
}

////////////////////////////////////////
const obj = { from: 1, to: 10 };

function createArr() {
  const arr = [];
  for (let i = this.from; i <= this.to; i++) {
    arr.push(i);
  }
  this.arr = arr;
}
const Bind = createArr.bind(obj);
Bind();
console.log(Bind);////всеодно видає undefined
///////////////////////////////////////
const obj = { from: 1, to: 10 };

function createArr() {
  const arr = [];
  for (let i = this.from; i <= this.to; i++) {
    arr.push(i);
  }
  this.arr = arr;
}
createArr.call(obj);
console.log(obj.arr);
<<<<<<< HEAD
////////////////////////////////////////////////////////
=======
////////////////////////////////////////
>>>>>>> 25e9780c5da3866e255d64969de3e2d11fbb6698
//Calculator
//Create obj with property result
//Create methods that calculates +, -, *, /
//Make possible to call one function after another
//Use correct method creation

const calculator = {
    result: 0,
    sum: function (num) {
        this.result += num;
        return this;
    },
    sub: function (num) {
        this.result -= num;
        return this;
    },
    mul: function (num) {
        this.result *= num;
        return this;
    },
    div: function (num) {
        this.result /= num;
        return this;
    },
};

calculator.sum(2).sum(2).mul(4);
<<<<<<< HEAD
console.log(calculator.result);
=======
console.log(calculator.result);
>>>>>>> 25e9780c5da3866e255d64969de3e2d11fbb6698
