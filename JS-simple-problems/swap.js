var first = 5;
var second = 9;
console.log(first , second);
var temp = first;
first =second;
second = temp;
console.log(first , second);

// Destructuring 2nd

[first , second] = [second , first];
console.log(first,second);