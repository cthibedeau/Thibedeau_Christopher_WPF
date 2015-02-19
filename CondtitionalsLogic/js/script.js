//Conditional Logic - Logical Operators

var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;
var wonLottery = true;

/*
//if the price of the phone is less than our budget AND if our paycheck is over 300
if(iPhonePrice < budget && paycheck > 300){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}
*/


//if the price of the phone is less than our budget OR if we won the lottery
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else{
    console.log("No phone for you!!");
}

