/*
Return total days count
getDaysInYear(year);

getDaysInYear(2021);
 365
getDaysInYear(2020);
 366
*/

const sum = year =>  new Date(year, 1, 29).getDate() === 29 ? 366 : 365; 
console.log(sum(2021));
console.log(sum(2020));
//або другий варіант, але тут я не змогла довести думку до кінця
let days = (month, year) => {
    return new Date(year, month, 0).getDate(); 
};
for (let i = 0; i < 12; i++) {
    days() = days(i, 2021);
};
console.log(days(2021));


/*
Return day number from date

getDayNumber(date);

getDayNumber("2023-01-12");
// 12

getDayNumber("2023-02-26");
// 57
*/
const date = new Date(2023, 2, 12);
date.getDate(2023, 2, 12);
console.log(date.getDate(2023, 2, 12));

const seconddate = new Date("2023-02-26");
seconddate.getDate("2023-02-26");
console.log(seconddate.getDate("2023-02-26"));
/*
Return quarter number from date
I quarter: Jan - Mar
II quarter: Apr - Jun
III quarter: Jul - Sep
IV quarter: Oct - Dec
*/
const d = new Date(2023, 1, 26);
let month = d.getMonth(2023, 1, 26);
const getQuarters = (date) => {
    switch (d.getMonth()) {
        case 0:
        case 1:
        case 2:
            console.log("Quarter:", 1);
            break;
        case 3:
        case 4:
        case 5:
            console.log("Quarter:", 2);
            break;
        case 6:
        case 7:
        case 8:
            console.log("Quarter:", 3);
            break;
        case 9:
        case 10:
        case 11:
            console.log("Quarter:", 4);
    }
};


