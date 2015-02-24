//Thibedeau, Christopher
//02.20.15
//Function Assignment
//SDI 0215

//Variables
var playersName = prompt("Welcome to my store, what is your name?"); //Asks the player's name
var userAge = prompt("How old are you, sorry have to make sure your old enough to play."); //Used to verify age of the user
var powerBallChoice = prompt("Would you like numbers for Powerball, \nor for Florida State Lottery?"); //Ask's if the player which version of lotto the player would like.

//Functions
function thanksForTellingMe(wholeName){ //Function for validating name

    while(wholeName == ""){ //Request to make sure the user is giving there name, wont let them continue with out it.

        wholeName = prompt("It is good luck to introduce your self."); //Just trying to encourage the user to be friendly.

    }
        return wholeName; // Returns the value of the name back out of the Function thanksForTellingMe
}


//Main Code
playersName = thanksForTellingMe(playersName); //Stores the return from the Function thanksForTellingMe into the variable playersName

console.log("Welcome to Kwike-E-Mart Mr. " + playersName + ", my name is Apu."); //A little humor added to the project, this piece actual just is a thank you to the user for giving their name. A well as returns a name in kind.
//Now you hear Apu's voice in your head as your reading. Enjoy.