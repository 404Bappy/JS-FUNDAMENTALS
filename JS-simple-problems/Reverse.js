const greetings = 'Hello how are you..?';

function reverseString(text){
    let reverse = ' ';
    for(const letter of text){
        console.log(letter);
    }
}

const reversed = reverseString(greetings);
console.log(reversed);