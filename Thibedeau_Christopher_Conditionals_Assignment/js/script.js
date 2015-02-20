//Thibedeau, Christopher
//02.18.15
//Conditionals Assignment
//SDI 0215

//Variables

//Asks the user how many turns it took them to get around the board the last time, and converts it to a number format to store.
var turnsInMonopoly = parseInt(prompt("How many turns did you take to get around the board once last time you played Monopoly?"));
//Asks the user how many turns it took them to complete a game the last time they played, and converts it to a number format to store.
var turnsToFinish = parseInt(prompt("How many turns did it take to complete a full game of Monopoly?"));
//Sets a numerical variable that defines how many times it took me to get around the board one time.
var turnsItTookMe = 9;
//Sets a numerical variable that defines how many turns it took me to complete a full game.
var turnsItTookToMeFinish = 51;
//Divides the user's average full game completion against how many turns it took them to get around the board one time.
var averageTimeForFullGame = turnsToFinish / turnsInMonopoly;
//Divides my average full game completion against how many turns it took me around the board on time.
var averageTimeFullGameMe = turnsItTookToMeFinish / turnsItTookMe;
//Prompt for user to please enter a number this time.
var pleaseEnterANumber = parseInt(prompt("You did not enter a number, please enter a number of turns it too you to get around the board one time"));


//Code

//Checks to see if the user took more turns than me to get around the board once, and that their answer isn't blank.k.
if(turnsInMonopoly = ""){
    //Asks the user to actually enter a number this time.
    console.log(pleaseEnterANumber);
    //Checks to see if the user took more turns than me to get around the board once, and that their answer isn't blank.
}else if(pleaseEnterANumber > turnsItTookMe) {
    //Gives the user a message saying that it took them more turns than me to get around the board.
    console.log("You took a few more turns that it took me.");
}else{
    //Gives the user a message saying that it took them less turns to get around the board the first time.
    console.log("You took less turns than I did to get around the board!");
}

//Does an overall comparrison of how long it took for both of us to both to get around the board. Gives a message to the user depending on the answer.
(averageTimeForFullGame < averageTimeFullGameMe) ? console.log("It took you lest time than me to complete a game!") : console.log("It took me less times to complete a game!");















/*Initial IF statment does t exactly what it should. If a lesser number is put in it will print out the correct statment
  As well the comparriason evaluation works correctly and will notify the user that they did not put in any number in.
*/