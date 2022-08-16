//[0,1,2,3,4,5,6,7,8,9,34,55,66,77,88];

// 3rd = 2nd + 1st
// 4th = 3rd + 2nd
// 5th = 4th + 3rd
// 6th = 5th + 4th
// 7th = 6th + 5th
// nth = (n-1) + (n-2)

function fibonacciSeries(n){
    if(n==0){
        return [0];
    } 
    if(n==1){
        return 1;
    }
    return fibonacciSeries(n-1) + fibonacciSeries(n-2);

}
const fiboElement = fibonacciSeries()
console.log(fiboElement);