/*Timeout
Create a function printNumber
printNumber should print numbers from 1 to 5
Print each number every second
Try using setTimeout and setInterval*/
function printNumber() {
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