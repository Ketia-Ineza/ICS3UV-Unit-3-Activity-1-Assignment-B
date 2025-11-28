// Program to calculate restaurant meal cost including tax and tip
// Also calculates how much each person pays when splitting the bill

// Input variables
const mealCost: number = 315.99;    // Cost of the meal in dollars
const numPeople: number = 5;        // Number of people splitting the bill
const taxRate: number = 0.13;       // HST rate (13%)
const tipRate: number = 0.15;       // Tip rate (15%)

// Calculate tax and tip
const taxAmount: number = mealCost * taxRate;
const tipAmount: number = mealCost * tipRate;

// Calculate total cost
const totalCost: number = mealCost + taxAmount + tipAmount;

// Calculate cost per person
const costPerPerson: number = totalCost / numPeople;

// Display results
console.log("Subtotal (meal cost):", mealCost);
console.log("Tax amount:", taxAmount);
console.log("Tip amount:", tipAmount);
console.log("Total cost:", totalCost);
console.log("Total cost per person:", costPerPerson);