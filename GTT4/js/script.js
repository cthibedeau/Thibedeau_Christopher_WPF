// variables
var myName = prompt("Enter your first name please: ");
var myRandom;

//functions
function nameValidation(firstName){

    var numOfTimes = 1;

    while(firstName === ""){

        firstName = prompt("Do not leave this field blank.\n\nPlease enter your first name.");

        numOfTime = numOfTimes++;

        if(numOfTimes === 10){

            console.log("Enough! I haven't time to play today!");

            break;
        }
    }
    //console.log("Welcome, " + firstName + ".");
    return firstName
}


function randomNumberGenerator(min, max){

    var myNumberArray = [];
    //minimum is 10 and our maximum is 50
    //Math.random() * (max - min) + min
   for(var i = 0; i < 5; i++) {

       var randomNumber = Math.random() * (max - min) + min;

       randomNumber = Math.ceil(randomNumber);
       //randomNumber = Math.floor(randomNumber;)
       //randomNumber = Math.random(randomNumber);

       myNumberArray[i] = randomNumber;
   }
    return myNumberArray;
    //console.log(randomNumber);

}
//main code
myName = nameValidation(myName);

myRandom = randomNumberGenerator(24, 50);

console.log("Welcome, " + myName + ", your randome number is " + myRandom + ".");