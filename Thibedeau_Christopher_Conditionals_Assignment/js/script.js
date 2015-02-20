//Thibedeau, Christopher
//02.18.15
//Conditionals Assignment
//SDI 0215

//variables

var turnsInMonopoly = parseInt(prompt("How many turns did you take to get around the board once last time you played Monopoly?"));
var turnsToFinish = parseInt(prompt("How many turns did it take to complete a full game of Monopoly?"));
var turnsItTookMe = 9;
var turnsItTookToFinish = 51;


if(turnsInMonopoly < turnsItTookMe && turnsInMonopoly != ""){
    console.log("You took less turns than me to get around the board!");
}else if(turnsInMonopoly > turnsItTookMe && turnsInMonopoly != "") {
    console.log("You took a few more turns that it took me.");
}else{
    console.log("You did not enter a number, please enter a number of turns it took you to get around the board one time.");
}