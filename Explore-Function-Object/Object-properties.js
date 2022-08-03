var laptop = {
    price: 70000,
    storage: '500 gb',
    processor: 'intel i7',
    color: 'silver'
};
console.log(laptop);
console.log(laptop.processor);
var laptopPrice = laptop.price;
console.log(laptopPrice);

// set a object property value

laptop.price = 22000;

//Different Ways to set a value of an object property
laptopPrice = 22000;
laptop['price']= 23000;
console.log(laptop);