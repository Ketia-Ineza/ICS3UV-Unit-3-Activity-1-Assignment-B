// Simple program to calculate meal cost including tax and tip

let mealCost: number = 315.99;
let people: number = 5;
let taxRate: number = 0.13;
let tipRate: number = 0.15;

let tax = mealCost * taxRate;
let tip = mealCost * tipRate;
let total = mealCost + tax + tip;
let perPerson = total / people;

console.log("Subtotal:", mealCost);
console.log("Tax:", tax);
console.log("Tip:", tip);
console.log("Total:", total);
console.log("Cost per person:", perPerson);