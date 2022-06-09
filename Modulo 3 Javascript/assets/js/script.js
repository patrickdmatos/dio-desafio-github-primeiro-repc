var span = 0;
var currentNumber = 0;

function decrement(){
    span = document.getElementById('currentNumber');
    currentNumber = currentNumber - 1;
    span.innerHTML = currentNumber;
}
function increment(){
    span = document.getElementById('currentNumber');
    currentNumber = currentNumber + 1;
    span.innerHTML = currentNumber;
}

// MUDA COR DO TEXTO QUANDO NEGATIVO

