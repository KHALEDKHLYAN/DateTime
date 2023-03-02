// Create a new Date object representing the current date and time.
var today = new Date();

// Extract the current day of the month (as a number) from the 'today' object.
var day = today.getDate();

// Define an array of weekday names.
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Frieday","Saturday","Sunday"];

// Display a message in the console indicating today's weekday name.
console.log("Today is : " + daylist[day] + ".");

// Extract the current hour, minute, and second from the 'today' object.
var hour = today.getHours();
var min = today.getMinutes();
var second = today.getSeconds();

// Determine whether it is currently AM or PM, based on the current hour.
var prepand = ( hour >= 12 )? "PM" : "AM";

// Handle special cases of midnight and noon, where hour value is 0.
if (hour===0 && prepand === ' PM '){
    if (minute===0 && second===0) {
        hour = 12
        prepand = ' Noon'
    } else {
        hour = 12;
        prepand = ' PM'
    }
}
if (hour ===0 && prepand === ' AM'){
    if (minute===0 && second===0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}

// Display the current time (hour, minute, second, and AM/PM) in the console.
console.log("Current Time : "+hour +prepand + " : " + second);


// Same but too short

/* 
const daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const now = new Date();
const hour = now.getHours() % 12 || 12;
const minute = now.getMinutes();
const second = now.getSeconds();
const prepand = hour >= 12 ? 'PM' : 'AM';
const suffix = (hour === 0 || hour === 12) ? (prepand === 'PM' ? 'Noon' : 'Midnight') : '';
console.log(`Today is: ${daylist[now.getDay()]}.`);
console.log(`Current Time: ${hour}${suffix} : ${minute} : ${second}${prepand}`);

*/
