//Functions - Basic Structure

/*
function outptMsg(){
    console.log("Hello World");
}

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    //console.log(area);
}
console.log(width);
calcArea();
*/

/*
calcArea(30, 20);

function calcArea(w, h){ //w=30, h=20
    var area = w * h;
    consold.log(area);
}
*/

/*
function dogYear(age){//paramaters
    var dogYear = age * 7;
    console.log("Sparty is " + dogYear + " years old.");
}
var age1=4;
dogYear(age1);//argument
*/

/*
var total = calcArea(30,20);

function calcArea(w, h){
    var area = w * h;
    return area;//function spitting the info out
}
console.log(total);
*/

/*
var functionName = function(){
    //code to run
}

functionName();
*/

var calcArea = function(width, height){
    var area = width * height;
    return area;
}

var a = calcArea(20, 30);

console.log(a);