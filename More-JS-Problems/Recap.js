function largestElement(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i ++){
        const element = numbers[i];
        if(element > max){
            max = element;
        }
    }
}
boro =largestElement(67);
console.log(boro);