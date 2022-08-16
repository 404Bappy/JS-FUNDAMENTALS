const number = [11 , 33 ,66, 77, 99, 67, 90, 87];

// let sum = 0;
// for(i = 0; i < number.length; i++){
//     const element = number[i];
//     sum = sum + element;
//     console.log(sum);
// }

function arrayTotal (number){
    let sum = 0;
    for(let i=0; i < number.length; i++){
        const element = number[i];
        sum = sum + element;
        return sum;
    }
}