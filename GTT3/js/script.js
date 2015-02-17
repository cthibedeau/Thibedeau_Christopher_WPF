//GTT3


// variables
var myAddress       = "123 Elm Street";      //string variable with my address
var myFavoriteStore = "\"Publix Supermarket\""; // string variable with my store name
var milesToStore    = 6.5;                  //number variable miles to the store
var construction    = false;                // Boolean indicating if there's construction

//outputs
console.log("I live at " + myAddress + ".");
console.log("I shop at  " + myFavoriteStore + ".");
console.log("It's only  " + milesToStore + " miles to the store.");
console.log("It is " + construction + " that there is construction enroute");

// confrim -- returns either true of false
construction = confirm("Is there still construction? OK for true, or Cancel for false.");

// Boolean conditional
if (construction === true) {
    // This code runs if construction is true.
    //console.log("Yes, there is still construction.");
    var extraMiles = prompt("How many more miles is it to the store?", "3");
    extraMiles = parseFloat(extraMiles);
    if (extraMiles >= 3) {
        // This code run if construction is true, and extra miles >=3
        extraMiles = extraMiles + milesToStore;
        console.log ("The total miles will be " + extraMiles + ".");
    } else {
        // This code runs if construction is true, and extra miles < 3
        console.log("We aren't adding much to the ride.");
    }
} else {
    // This code runs if construction is NOT true (false).
    //console.log("No, the road ahead is clear.");
    //var isThereTraffic = confirm("Is there a lot of traffic ahead? OK for true, or Cancel for false.");
    var myEmptyString = prompt("What store would you like to go to?");
    if (myEmptyString === "") {
        console.log("Hey, you didn't enter a store name!");
    } else {
        console.log("Ok lets go there.");
    }
}

