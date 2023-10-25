
/*Factorial recursion
Count factorial by using recursion*/
const factorial = (initialNumber) => {
  if (initialNumber === 0) {
    return 1;
  } else {
    return initialNumber * factorial(initialNumber - 1);
  }
};

const result = factorial(5);
console.log(result);
/*
Fibonacci recursion
Show Fibonacci sequence by using recursion*/

const fib = (length) => {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1];
  } else if (length === 2) {
    return [1, 1];
  } else {
    const arr = fib(length - 1);
    const nextNum = arr[arr.length - 1] + arr[arr.length - 2];
    return [...arr, nextNum];
  }
};

const result1 = fib(5);
console.log(result1.join(' '));

//or

const fibb = (length) => {
  if (length <= 1) {
    return 1;
  } else {
    return fibb(length - 1) + fibb(length - 2);
  }
};
const fibonacci = (length) => {
  const resultArr = [];
  for (let i = 1; i <= length; i++) {
    resultArr.push(fibb(i));
  }
  return resultArr;
};
console.log(fibonacci(5));

/*Read List
Print all list titles using recursion
(optional) think about solution with loops
*/
const list = {
  title: "lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

const readList = (list) => {
  while (list) {
    console.log(list.title);
    list = list.next;
  }
};

readList(list);
