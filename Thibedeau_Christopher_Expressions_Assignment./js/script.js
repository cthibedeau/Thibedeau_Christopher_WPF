//Thibedeau, Christopher
//02/12/2015
//Expressions assignment
//SDI 0215 01

//Prompts to discover the length of time for studying, brainstormin, and codding for the assignment
var lengthOfTimeStudying = prompt("How long did you take to study for the assignment? \n In minutes please.");
var lenghtOfTimeToBrainStorm = prompt("How long did you spend brain storming for the assignment? \n In minutes please.");
var lenghtOfTimeToCode = prompt("How much time did you spend actually coding the assignment? \n In minutes please.");

//Variable to add up all of the time spent in minutes to do the assignment.
var totalTimeSpentOnAssignment  = Number(lengthOfTimeStudying) + Number(lenghtOfTimeToBrainStorm) + Number(lenghtOfTimeToCode);

//Returning the total time in minutes to do the assignment
console.log("You spent a total of " + totalTimeSpentOnAssignment + " mins working on your assignment");

//Setting up a array with the times in it.
var testArray = [lenghtOfTimeToCode, lenghtOfTimeToBrainStorm, lengthOfTimeStudying];

//Dividing the total time in an array format by the Number of days we had.
var arrayCalculation = (Number(testArray[0]) + Number(testArray[1]) + Number(testArray[2])) / 7;

//Returning an average of time spent each day of the week till the assignment was due.
console.log("Your overall average time spent per day in minutes is " + arrayCalculation + ".");
