"use strict";

// 1: Hourly wage
let hourlyWage = prompt("What is your hourly wage?");

// Convert to number
hourlyWage = Number(hourlyWage);

// Confirm wage
confirm("Your hourly wage is $" + hourlyWage);

// 2: Hours worked prompt
let hoursWorked = prompt("How many hours did you work this week?");

// Remove spaces and confirm hours
hoursWorked = Number(hoursWorked.trim());

confirm("You worked " + hoursWorked + " hours this week");

// 3: Calculations
let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * 0.10;
let netPay = grossPay - taxes;

// 4: Output
alert("Your net pay for the week is: $" + netPay.toFixed(2));

// 5: Overtime check
if (hoursWorked > 40) {
    console.log("You worked overtime this week!");
} else if (hoursWorked === 40) {
    console.log("You worked exactly 40 hours.");
} else {
    console.log("No overtime this week.");
}

// 6: Paycheck check
if (netPay > 800) {
    alert("Great work this week!");
} else {
    alert("Keep working toward that bag!");
}
