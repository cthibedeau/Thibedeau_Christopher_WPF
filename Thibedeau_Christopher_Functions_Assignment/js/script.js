//Thibedeau, Christopher
//02.20.15
//Function Assignment
//SDI 0215

//Variables
var playersName = prompt("Welcome to my store, what is your name?"); //Asks the player's name
var playersAge; //= prompt("How old are you, sorry have to make sure your old enough to play."); //Used to verify age of the user
var lottoTicket = prompt("Would you like numbers for PowerBall, \nor for Florida State Lottery?"); //Ask's if the player which version of lotto the player would like.

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

/*function whichLottoDoYouWant(whichLotto){

    whichLotto = prompt("Would you like a Florida Lottery ticket, or a PowerBall ticket?");

    var myLottoArray = [];

        if(whichLotto === "Florida Lottery"){

            for(var i = 0; i <= 4; i++){

                var floridaLottery = Math.random() * (53 - 1) + (1);

                floridaLottery = Math.floor(floridaLottery);

                myLottoArray[i] = floridaLottery;

            }

        }else{

            for(var h = 0; h <= 4; h++){

                var powerBall = Math.random() * (59 - 1) + (1);

                powerBall = Math.floor(powerBall);

                myLottoArray[h] = powerBall;
            }
        }

    return myLottoArray;
}*/

/*function whichLottoDidYouPick(floridaLottery, powerBall){

    var lottoArray = [];

        if(floridaLottery){

            for(var i = 0; i <= 4; i ++){

                floridaLottery = Math.random() * (53 - 1) + (1);

                floridaLottery = Math.floor(floridaLottery);

                lottoArray[i] = floridaLottery;

            }else{

                for(var h = 0; h <= 4; h++){

                    powerBall = Math.random() * (59 - 1) + (1);

                    lottoArray[h] = powerBall;
                }
            }
        }

    return lottoArray;
}*/

//Main Code
playersName = thanksForTellingMe(playersName); //Stores the return from the Function thanksForTellingMe into the variable playersName

playersAge = ageVerification(playersAge); //Sores the return from the function ageVerification in the variable playersAge.

//lottoTicketNumbers = whichLottoDidYouPick();

console.log("Welcome to Kwike-E-Mart Mr. " + playersName + ", my name is Apu."); //A little humor added to the project, this piece actual just is a thank you to the user for giving their name. A well as returns a name in kind.

if(lottoTicket === "Florida State"){

    var lottoArray = [];

    for(var i = 0; i <= 4; i ++){

        var floridaLottery = Math.random() * (53 - 1) + (1);

        floridaLottery = Math.floor(floridaLottery);

        lottoArray[i] = floridaLottery;

        console.log("You numbers for the Florida State Lottery are " + lottoArray + ". Thank you come again.");

    }

}else{

    var powerBallArray = [];

        for(var h = 0; h <= 4; h++){

            var powerBallLotto = Math.random() * (59 - 1) + (1);

            powerBallLotto = Math.floor(powerBallLotto);

            var powerBall = Math.random() * (35 - 1) + (1);

            powerBall = Math.floor(powerBall);

            powerBallArray[h] = powerBallLotto;

            console.log("You numbers for the Power Ball numbers are " + powerBallArray + ", and your Power Ball number is " + powerBall + ".");
        }
    }

/*console.log("You are sticking with " + playersAge + " as your final answer. Good here is your " + lottoTicketNumbers + " ticket."); //This is Apu giving the player their ticket after verifying their age and asking them to come again.

console.log("Your numbers for " + lottoTicketNumbers + " are.");*/

//Now you hear Apu's voice in your head as your reading. Enjoy.