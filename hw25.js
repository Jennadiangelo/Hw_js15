/*Random Resolve
Create a function randomResolve
Create a random number from 1 to 5
Delay promise for random seconds
If number is even then resolve promise
If number is odd then reject promise
*/

const randomResolve = async () => {
  return new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * (5-1)) + 1;
    setTimeout(() => {
      if (number % 2 === 0) {
        resolve(`${number} is even`);
      } else {
        reject(`${number} is odd`);
        }
    }, number * 1000); 
  });
};

randomResolve()
  .then((number) => {
    console.log(number); 
  })
  .catch((number) => {
    console.log(number); 
  });

  /*Promise API
Create a function createPromiseArr
Function receives length of arr
Reuse randomResolve to get promises
Use Promise.all
If revolved then print '🥳 Yasss'
If rejected then print '🫠🫡 ok'
(Optional) play with Promise.race

const createPromiseArr = (n) => {
  // your code
};*/

const createPromiseArr = async (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(randomResolve());
    };
    

  Promise.all(arr)
    .then(() => {
      console.log('🥳 Yasss');
    })
    .catch(() => {
      console.log('🫠🫡 ok');
    });
};

createPromiseArr(2);

/*Async/Await
Update prev task and use async/await
Modify this func printResponse

const printResponse = (n) => {
  // your code
};*/

const printResponse = async (n) => {
    await createPromiseArr(n)
        .then(() => {
            console.log('🥳 Yasss');
        })
        .catch(() => {
            console.log('🫠🫡 ok');
        })
};
printResponse(2);





