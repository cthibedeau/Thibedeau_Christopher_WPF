//Thibedeau, Christopher
//02.20.15
//Function Assignment
//SDI 0215

//Variables
var playersName = prompt("Welcome to my store, what is your name?"); //Asks the player's name
var playersAge; //Used to verify age of the user
var lottoTicket = prompt("Would you like numbers for PowerBall, \nor for Florida State Lottery?"); //Asks if the player which version of lotto the player would like.

//Functions
function thanksForTellingMe(wholeName){ //Function for validating name

    while(wholeName == ""){ //Request to make sure the user is giving there name, wont let them continue with out it.

        wholeName = prompt("It is good luck to introduce your self."); //Just trying to encourage the user to be friendly.

    }
        return wholeName; // Returns the value of the name back out of the Function thanksForTellingMe
}

function ageVerification(howOldAreYou){ //Function for validating age of player

    howOldAreYou = parseInt(prompt("How old are you? You have to be at least 18 to play.")); //Asks you to give your age, also tells you what the minimum age is. It will convert the string to a number.

    while(howOldAreYou <= 17 || isNaN(howOldAreYou)){ //Makes sure the age is at least 18, and that a number is actually imputed..

        howOldAreYou = prompt("You need to be at least 18 to play, please try again."); //Apu is being silly and giving the player a second chance, or third to give A correct age.

    }

    return howOldAreYou; // Returns the age back to the function ageVerification so that it can be outputted later.
}

function floridaStateLottery(floridaLottery){//Function for crating an array of numbers if Florida State lotto is picked.

    var florida = []; //Sets up an empty array to store the numbers in.

            for(var i = 0; i <= 5; i++){ // Creates a cycle count that starts at 0 and goes up to 4 in the array, giving me 5 numbers.

                floridaLottery = Math.random() * (53 - 1) + (1); //Creates a random number between 1 and 53.

                floridaLottery = Math.floor(floridaLottery); //Rounds the number down so that it is a whole number.

                florida[i] = floridaLottery; //Tells the array to take the numbers from the random call.

            }

    return florida; //Returns the numbers back out.
}

function powerBallLottery(powerBall){//Function for crating an array of numbers if PowerBall lotto is picked.

    var powerLotto = [];//Sets up an empty array to store the numbers in.

            for(var h = 0; h <= 4; h++){// Creates a cycle count that starts at 0 and goes up to 4 in the array, giving me 5 numbers.

                powerBall = Math.random() * (59 - 1) + (1);//Creates a random number between 1 and 53.

                powerBall = Math.floor(powerBall);//Rounds the number down so that it is a whole number.

                powerLotto[h] = powerBall;//Tells the array to take the numbers from the random call.

            }

    return powerLotto;//Returns the numbers back out.

}

//Main Code
playersName = thanksForTellingMe(playersName); //Stores the return from the Function thanksForTellingMe into the variable playersName

playersAge = ageVerification(); //Sores the return from the function ageVerification in the variable playersAge.

console.log("Welcome to Kwike-E-Mart Mr. " + playersName + ", my name is Apu."); //A little humor added to the project, this piece actual just is a thank you to the user for giving their name. A well as returns a name in kind.

if(lottoTicket == "Florida State"){//This is an if statement to see which option is picked Florida or PowerBall.

   lottoTicket = floridaStateLottery(lottoTicket);//Calls the Function for Florida State lotto.

    console.log("Your numbers for the Florida State Lottery is " + floridaStateLottery(lottoTicket) + " good luck. Thank you come again.");//Returns a console log to the player if they choose Florida.

}else{//If Florida State lotto is not chosen then it will run the statement for PowerBall.

   lottoTicket = powerBallLottery(lottoTicket);//Stores the return from the Power Ball lotto.

    var powerBallNumber  = Math.random() * (35 - 1) + (1);//Creates a random number for the Power Ball.

    powerBallNumber = Math.floor(powerBallNumber);//Rounds the number down so it is a whole number.

    console.log("Your numbers for the Power Ball Lottery is " + powerBallLottery(lottoTicket) + " and you Power Ball Number is " + powerBallNumber + " luck. Thank you come again.");//Returns a console log to the player if they choose Power Ball.
}

//Florida State numbers 7,14,3,40,24,18
//PowerBall numbers 5,28,52,5,38 Powerball is 5


//Now you hear Apu's voice in your head as your reading. Enjoy!