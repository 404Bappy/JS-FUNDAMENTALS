
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const blueButton = document.getElementById('my-blueButtonn');

//Just set the name of the function

blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//Handle Event Using Anonymous Function

const greenButton = document.getElementById('my-greenButton');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'Green';
}


//Handle by using add eventlistener

const GreenYellow = document.getElementById('my-greenYellowButton');
GreenYellow.addEventListener('click', makeGreenYellow);

function makeGreenYellow() {
    document.body.style.backgroundColor = 'greenYellow';
}

//addEventListener

const hotPink = document.getElementById('my-hotPinkButton');

hotPink.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotPink'
})

//Direct Shortcut addEventListener
document.getElementById('my-IndigoButton').addEventListener('click', function () {
    document.body.style.backgroundColor = 'indigo'
})


