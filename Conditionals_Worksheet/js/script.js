//Thibedeau, Chris
//02.17.15
//Conditionals Worksheet


//Example

//Variables
//Setting the weight of the Competitor's as well as the minWeightRequirements
var competitorsWeight = 249;
var minWeightRequirements = 250;

//Compares the competitors weight to the min weight
if(competitorsWeight >= minWeightRequirements){
    //If the competitor is meets requirements
    console.log("The competitor qualifies for the heavyweight division.");
}else{
    //if the competitor does not meet requirements
    console.log("The competitor needs to gain some weight!");
}

//Group 1

//Variables
var gasEfficiency = 29;
var gasGauge = .40;
var gasTankCapacity = 15;
var nextGasStation = 200;
//This multiples my gas efficiency by my tank's capacity then multiplies that by the % displayed in the gas gauge.
var currentMillageLeftInTank = gasEfficiency * gasTankCapacity * gasGauge;
//How much gas I currently have
var gasInTank = gasTankCapacity * gasGauge;

//Compares if I have enough gas or not to make it to the next gas station, or if I should stop now.
if(currentMillageLeftInTank > nextGasStation){
    //If I have enough gas I will keep going
    console.log("Yes, you can make it without stopping for gas!");
}else{
    //If I don't have enough gas then im stuck
    console.log("You only have " + gasInTank + " gallons of gas in your tank, better get gas now while you can!" )
}

//Group 2

//Variables
var correctUsername = cthibedeau;
var correctPassword = FullSail;
//Request for username and password
var usernameEneteredByUser = prompt("Please enter your username.");
var passwordEneteredByUser = prompt("Please enter your password.");

//Will first compare username, then compare the password
if(correctUsername === usernameEneteredByUser && correctPassword === passwordEneteredByUser ){
    if(correctUsername === usernameEneteredByUser && correctPassword != passwordEneteredByUser){
        console.log("Password does not match our records.");
    }else {
        console.log("User not found. Try again.");
    }
}else{
    console.log("Welcome, " + usernameEneteredByUser + "!");
}

//Group 3

var seniorAge = 62;
var childAge = 7
var movieTicketPrice = 12;
var ticketPriceSenior = 7;
var ticketPriceChild = 7;
var ticketPriceAfternoon = 7;
var movieTime = 4;

if(childAge <= 10){
    console.log("The ticket price is " + ticketPriceChild + ".");
}




