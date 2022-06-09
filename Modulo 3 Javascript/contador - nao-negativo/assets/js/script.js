var span = 0;
var currentNumber = 0;

function decrement(){
    span = document.getElementById('currentNumber');
    if(currentNumber >= 1){
        currentNumber = currentNumber - 1;
    }else{
        currentNumber = currentNumber;
    }
    span.innerHTML = currentNumber;
}
function increment(){
    span = document.getElementById('currentNumber');
    currentNumber = currentNumber + 1;
    span.innerHTML = currentNumber;
}
