function addTwoNumbers(number1 , number2){
    console.log(number1 , number2);
    var total = number1 + number2;
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber , secondNumber);
console.log('result value: ', result);

function multiplyTwoNumbers(num1 , num2){
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(5, 100);
console.log('total after multiplication', total);