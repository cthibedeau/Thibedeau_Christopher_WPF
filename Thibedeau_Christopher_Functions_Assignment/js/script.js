//Thibedeau, Christopher
//02.20.15
//Function Assignment
//SDI 0215

//Variables
var playersName = prompt("Welcome to my store, what is your name?"); //Asks the player's name
var playersAge; //= prompt("How old are you, sorry have to make sure your old enough to play."); //Used to verify age of the user
var lotoTicketNumbers; //= prompt("Would you like numbers for Powerball, \nor for Florida State Lottery?"); //Ask's if the player which version of lotto the player would like.

//Functions
function thanksForTellingMe(wholeName){ //Function for validating name

    while(wholeName == ""){ //Request to make sure the user is giving there name, wont let them continue with out it.

        wholeName = prompt("It is good luck to introduce your self."); //Just trying to encourage the user to be friendly.

    }
        return wholeName; // Returns the value of the name back out of the Function thanksForTellingMe
}

function ageVerification(howOldAreYou){ //Function for validating age of player

    howOldAreYou = parseInt(prompt("How old are you? You have to be at least 18 to play.")); //Asks you to give your age, also tells you what the minimum age is. It will convert the string to a number.

    while(howOldAreYou <= 17){ //Request for players age, wont let them have a ticket with out it.

        howOldAreYou = prompt("You need to be at least 18 to play, please try again."); //Apu is being silly and giving the player a second chance, or third to give A correct age.

    }

    return howOldAreYou; // Returns the age back to the function ageVerification so that it can be outputed later.
}

function whichLotoDoYouWant(whichLoto){

    whichLoto = prompt("Would you like a Florida Lottery ticket, or a PowerBall ticket?");

    var myLotoArray = [];

        if(whichLoto === "Florida Lottery"){

            for(var i = 0; i <= 5; i++){

                var flordiaLottery = Math.random() * (53 - 1) + (1);

                flordiaLottery = Math.floor(flordiaLottery);

                myLotoArray[i] = flordiaLottery;

            }

        }else{

            for(var i = 0; i <= 5; i++){

                var powerBall = Math.random() * (59 - 1) + (1);

                powerBall = Math.floor(powerBall);

                myLotoArray[i] = powerBall;
            }
        }

    return myLotoArray;
}

//Main Code
playersName = thanksForTellingMe(playersName); //Stores the return from the Function thanksForTellingMe into the variable playersName

playersAge = ageVerification(); //Sores the return from the function ageVerification in the variable playersAge.

lotoTicketNumbers = whichLotoDoYouWant();

console.log("Welcome to Kwike-E-Mart Mr. " + playersName + ", my name is Apu."); //A little humor added to the project, this piece actual just is a thank you to the user for giving their name. A well as returns a name in kind.

console.log("You are sticking with " + playersAge + " as your final answer. Good here is your " + lotoTicketNumbers + " ticket."); //This is Apu giving the player their ticket after verifying their age and asking them to come again.

console.log("Your numbers for " + lotoTicketNumbers + " are.");

//Now you hear Apu's voice in your head as your reading. Enjoy.