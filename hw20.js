/*Create arr method
Create obj with property from and to
Create function createArr that reads obj properties and
Creates new sorted arr with range from and to
Assign this arr as obj property

Create 3 solutions Solution 1 without bind, call or apply
Solution 2 with bind Solution 3 with call or apply*/

const createArr = ({from, to}) => {
  const {from, to} = obj;//це я чесно знайшла в інтернеті і не розумію чого так, бо коли я писала навпаки воно видавало помилку
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
    obj.arr = arr;
    console.log(obj.arr);
}
const randObj = { from: 1, to: 10 };
createArr(randObj);
console.log(randObj.arr);
////////////////////////////////////////
const createArr = () => {
  const { from, to } = this;
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  this.arr = arr;
}

const secObj = { from: 1, to: 10 };
const boundCreateArr = createArr.bind(secObj);
boundCreateArr();
console.log(secObj.arr);
///////////////////////////////////////////
const createArr = () => {
  const { from, to } = this;
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  this.arr = arr;
}

const myObj = { from: 1, to: 10};
createArr.call(myObj);
console.log(myObj.arr);
////////////////////////////////////////////////////////
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
console.log(calculator.result);
