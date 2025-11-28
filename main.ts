// Program to calculate restaurant meal cost including tax and tip
// Also calculates how much each person pays when splitting the bill

// Input variables
let mealCost: number = 315.99;    // Cost of the meal in dollars
let numPeople: number = 5;        // Number of people splitting the bill
let taxRate: number = 0.13;       // HST rate (13%)
let tipRate: number = 0.15;       // Tip rate (15%)

// Calculate tax and tip
let taxAmount: number = mealCost * taxRate;
let tipAmount: number = mealCost * tipRate;

// Calculate total cost
let totalCost: number = mealCost + taxAmount + tipAmount;

// Calculate cost per person
let costPerPerson: number = totalCost / numPeople;

// Display results
console.log("Subtotal (meal cost):", mealCost);
console.log("Tax amount:", taxAmount);
console.log("Tip amount:", tipAmount);
console.log("Total cost:", totalCost);
console.log("Total cost per person:", costPerPerson);