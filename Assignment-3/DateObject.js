// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and 
// returns the day of the week for that date. The function should use the Date object.
// b. Implement the function to display the day of the week for the current date.

let nameOfday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
function dayOfDate(d){
    let t = new Date(d);
    let day = t.getDay();
    let result = convertToDay(day);
    // console.log(result);
    return result;
}
function convertToDay(a){
    switch(a){
        case 1:
            return nameOfday[0];
        case 2:
            return nameOfday[1];
        case 3:
            return nameOfday[2];
        case 4:
            return nameOfday[3];
        case 5: 
            return nameOfday[4];
        case 6: 
            return nameOfday[5];
        case 7:
            return nameOfday[6];
        default:
            console.log("Something went wrong");
    }
}
//current date
let day1 = dayOfDate(new Date());
console.log(day1);
//customize date
let day2 = dayOfDate("2023-06-29");

console.log(day2);