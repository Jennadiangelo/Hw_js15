

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

filterRange = arr.slice(2, 7);
console.log(filterRange);

const arr = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];

arr.sort((a, b) => {
  
  return a - b; 
});

console.log("sortArr",arr);


const arr = ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];
arr.sort((a, b) => {
  
  return a.length - b.length; 
});
console.log(arr);

//Calculate average age of users older then 17 and younger then 55
const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const filteredArr = arr.filter((age) => 17 < age < 55);//нажаль це не працює...
const averageAge = filteredArr.age / filteredArr.length;
console.log(averageAge);

const arr = [
  { name: "John", age: 25 },
  { name: "John", age: 5 },
  { name: "John", age: 2 },
  { name: "John", age: 45 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Mary", age: 2 },
  { name: "Taras", age: 25 },
  { name: "Taras", age: 19 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Alan", age: 32 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
  { name: "Elizabeth", age: 8 },
];


arr.sort((a, b) => {

    if (a.name === b.name) {
        return a.age - b.age;
    }
    
    
});
arr.sort();
console.log(arr);
