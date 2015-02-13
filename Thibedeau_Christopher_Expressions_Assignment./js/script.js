//Thibedeau, Christopher
//02/12/2015
//Expressions assignment
//SDI 0215 01


var lengthOfTimeStudying = prompt("How long did you take to study for the assignment? \n In minutes please.");
var lenghtOfTimeToBrainStorm = prompt("How long did you spend brain storming for the assignment? \n In minutes please.");
var lenghtOfTimeToCode = prompt("How much time did you spend actually coding the assignment? \n In minutes please.");
var totalTimeSpentOnAssignment  = lengthOfTimeStudying + lenghtOfTimeToBrainStorm + lenghtOfTimeToCode;

console.log("You spent a total of " + totalTimeSpentOnAssignment + " mins working on your assignment");

var testArray = [lenghtOfTimeToCode, lenghtOfTimeToBrainStorm, lengthOfTimeStudying];
var arrayCalculation = (testArray[0] + testArray[1] + testArray[2]) / totalTimeSpentOnAssignment

console.log("Your overall average time spent was " + arrayCalculation + ".");
