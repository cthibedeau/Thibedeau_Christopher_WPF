//Problem 1 - Dog Years

// Variable for human years.
var normalYears = 1;

// variable for how many years to dog years.
var dogYears = normalYears + 6;

// Using console.log to write out Sparkys age in both human and dog years as a concatanated string.
console.log("Sparky is " + normalYears + " human years old which is " + dogYears + " in dog years.");

//Problem 2 - Slice of Pizza

// Initial variables that will be mulitplied and then diveded to find how many slices per person.
var numberOfStudents = 5;
var numberOfSlicesPerPizza = 8;
var numberOfPizzasOrdered = 4;

// Here we multiply the number of slices per pizza by the number of pizzas ordered, we then dived that by how many students are at the party.
var numberOfSlicesPerPerson = numberOfSlicesPerPizza * numberOfPizzasOrdered / numberOfStudents;

// Here we write to the console the numberOfSlicesPerPerson
console.log("Each person ate " + numberOfSlicesPerPerson + " slices of pizza at the party.");

//Problem 3 - Slice of Pie part 2

// Changing the variables from problem 1
numberOfStudents = 4;
numberOfSlicesPerPizza = 10;
numberOfPizzasOrdered = 2;

// This is where the calculation to find out what Sparky get is done.
var slicesOfPieForSparky = numberOfSlicesPerPerson * numberOfPizzasOrdered / numberOfStudents;

// Writing to the log the out put of the calculation.
console.log("Sparky got " + slicesOfPieForSparky + " slices of pizza.");

//Problem 4 - Average shopping bill

// Creating the array of weekly spending at the grocery store for 5 weeks.
var weeklyGroceryBill = [140, 130, 120, 100, 150, 95];

// Adds up all the values from the array to give us a total dollar amount spent.
var totalSpent = weeklyGroceryBill[0] + weeklyGroceryBill[1] + weeklyGroceryBill[2] + weeklyGroceryBill[3] + weeklyGroceryBill[4];

// Divides the total amount spent by 5 to give us our average.
var averageMoneySpent = totalSpent / 5;

// Writes to the log informing us of our total, and average.
console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. " + "That is an average of $" + averageMoneySpent + " per week.");

//Problem 4 - Discounts

// Sets up our original price as well as the item, sales tax, and discount percentage.
var item = "Jeans";
var originalPrice = 35;
var salesTaxPercentage = .9;
var discountPercentage = .45;

// This will calculate the price of the item and the sales tax, and the price with the discount applied.

var priceAfterTax = originalPrice  / salesTaxPercentage;
var priceOfitemWithDiscount = priceAfterTax / discountPercentage;

// Prints everything out to the console for the user to read.
console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + discountPercentage + "% discount, it is now $" + priceOfitemWithDiscount + ", and $" + priceAfterTax + "with tax.");