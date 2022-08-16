//0,1,2,3,4,5,6,7,8,9,34,55,66,77,88;

// 3rd = 2nd + 1st
// 4th = 3rd + 2nd
// 5th = 4th + 3rd
// 6th = 5th + 4th
// 7th = 6th + 5th
// nth = (n-1) + (n-2)
const fibo = [0, 1]
for(let i = 2; i<=10; i++){
fibo[i] = fibo[i-1]+ fibo[i-2];
}
console.log(fibo);