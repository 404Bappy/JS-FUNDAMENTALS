// Convert Inch To Feet //

function inchToFeet(inches){
    var feet = inches / 12;
    return feet;
}


var myInches = 178;
var feet = inchToFeet(myInches);
console.log(feet);


var bappyInches = 160;
var feet = inchToFeet(bappyInches);
console.log(feet);

// Convert miles to kM//

function mileToKilometer(miles){
    var km = miles * 1.60934;
    return km;
}

var merathon = mileToKilometer(26.2);
console.log(merathon);