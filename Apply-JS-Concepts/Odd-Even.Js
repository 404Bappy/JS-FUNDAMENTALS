//Find Odd Number//
const reminder =  number = 5;
console.log(number % 2);
console.log(reminder == 0);

const number = 345;
function isEven(number ){
    if(number %2 == 0){
        return true;
    }
    return false;
}

const myNumber = 1690;
const isMyNumberEven = isEven(myNumber);

console.log(isMyNumberEven);


const herNumber = 3333333;
const herNumberEven = isEven(herNumber);

console.log(herNumber);


// is odd Function //
function isOdd(number){
    if(number %2 !=0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('is my number is odd ', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber);
console.log('is her number is odd', isHerNumberOdd);
