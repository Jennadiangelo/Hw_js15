/*Timeout
Create a function printNumber
printNumber should print numbers from 1 to 5
Print each number every second
Try using setTimeout and setInterval*//*
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
printNumber();*/

/*Delayed loop
Loop though from 1 to 5
Print number with a 1s delay
*//*
const delayedLoop = () => {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i*1000); 
  }
};

delayedLoop();*/

/*Random
Create a function randomPromise
randomPromise should return promise
randomPromise should resolve promise if random number >= 0.5
randomPromise should reject promise if random number <> 0.5

const getUserData = (id) => {
  // your code
};
// code for error
// throw Error("404 not found");*/
