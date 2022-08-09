// let factorial = 1;
// for (let i = 1; i<=5; i++){
//     factorial = factorial * i;
// }
// console.log(factorial);


function factorial(number){
    let facto = 1;
    for(let i = 1; i<=number; i++){
        facto = facto * i ;
    }
    return facto;
}

var firstFactorial = factorial(10);
console.log('factorial of 10 :', firstFactorial);


var secondFactorial = factorial(90);
console.log('factorial of 90 :', secondFactorial);
