/*Timeout
Create a function printNumber
printNumber should print numbers from 1 to 5
Print each number every second
Try using setTimeout and setInterval*/
const printNumber = () => {
    let num = 1;
    const sec = setInterval(print, 1000);
  function print() {
      if (num <= 5) {
      console.log(num);
          num++;
      } 
    }
}
printNumber();

/*Delayed loop
Loop though from 1 to 5
Print number with a 1s delay
*/
const delayedLoop = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i*1000); 
  }
};

delayedLoop();

/*Random
Create a function randomPromise
randomPromise should return promise
randomPromise should resolve promise if random number >= 0.5
randomPromise should reject promise if random number <> 0.5
*/
const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const randnum = Math.random(); 
    if (randnum >= 0.5) {
      resolve(`${randnum} is >= 0.5`);
    } else {
      reject(`${randnum} is < 0.5`);
    }
  });
}
randomPromise()
  .then((randnum) => {
    console.log(randnum);
  })

  .catch((randnum) => {
    console.log(randnum);
  });

 /* Server
Create a function getUserData
getUserData receives id as a param
getUserData should return promise
Find user by id
If no users found throw Error
Add delay for 1 second
*/
const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];

const getUserData = (id) => {
return new Promise((resolve, reject) => {
  setTimeout(() => {
      const user = users.find(user => user.id === 1||2);
      if (user) {
        resolve(user);
      } else {
        reject("404 not found");
      }
    }, 1000); 
  });
};

// Example usage:
getUserData()
  .then((user) => {
    console.log(user);
  })
  .catch(() => {
    throw Error("404 not found");
  });


