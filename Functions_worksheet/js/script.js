//Thibedeau_Christopher
//02.21.15
//Functions Worksheet



var beeStingsNeeded = function(victimsWeight, beeStings){//Sets the function return variable for bee stings
     beeStingsNeeded = victimsWeight / beeStings;// This is the division of victims weight by number of bee stings needed to kill victim

    return beeStingsNeeded;// Returns the number back beeStingsNeeded variable for storage.
}
var bee = beeStingsNeeded(190, 8.666666667); //Variable that containes the weight and the number of bee stings

console.log("It takes " + bee + " bee stings to kill this animal");//Prints to the log the result of the number of bee stings needed to kill the victim