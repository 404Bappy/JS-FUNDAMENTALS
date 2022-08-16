const names = ["abul", "babul", "abul" ,"tibul", "khibul", "rabbul", "mogbul", "kabul", "lakbul"];
function removeDuplicate(names){
    const unique = [];
    for (let i = 0; i <names.length; i++){
        const element = names[i];
        console.log(element);
    }
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);