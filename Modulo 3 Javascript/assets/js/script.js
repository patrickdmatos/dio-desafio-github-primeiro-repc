var span = 0;
var currentNumber = 0;

function decrement(){
    span = document.getElementById('currentNumber');
    currentNumber = currentNumber - 1;
    span.innerHTML = currentNumber;

    if(currentNumber < 0){
        span = document.getElementById('currentNumber').style.color = 'red';
    }
    else if(currentNumber >= 0){
        span = document.getElementById('currentNumber').style.color = 'black';
    }
}
function increment(){
    span = document.getElementById('currentNumber');
    currentNumber = currentNumber + 1;
    span.innerHTML = currentNumber;
    
    if(currentNumber < 0){
        span = document.getElementById('currentNumber').style.color = 'red';
    }
    else if(currentNumber >= 0){
        span = document.getElementById('currentNumber').style.color = 'black';
    }
}

// MUDA COR DO TEXTO QUANDO NEGATIVO

