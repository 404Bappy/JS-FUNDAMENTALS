function bringSingara(taka) {
    console.log('Singara Price', taka);
    console.log('mama 10 ta singara den to..!!');
    var singaraPrice = 10;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;
}
var money = 90;
var singara = bringSingara(money);
console.log('ai lon mama', singara);