function largestElement(number){
    const largest = 0;
    for(let i =0; i < number.length; i++){
       const element  = number[i];
       if(element > largest);
       largest = element;
    }
    return largest;
}

const age = [12, 18, 19 ,30, 34,78,88,47];
const oldest =largestElement(age);
const oldest2 = largestElement[-12,-15,-44,-80];
console.log('oldest', oldest2);
