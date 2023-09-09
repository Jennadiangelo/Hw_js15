const str = ("hello");
    const arr = str.split("");
    const reversed = arr.reverse();
    const reverse = reversed.join("");
console.log(reverse);

const str = ("Hi my name is Taras");
const countWords = (str) => {
    return str.split(" ").length;
};
  
console.log(countWords(str));

const str = "Hello world!!!"
const cutStr = (str, maxLength) => {
    maxLength <= 5;
    if (str.length <= 5) {
        console.log(str);
    }
    else if (str > 5) {
        console.log(str.slice(0, 5));
    }
};
