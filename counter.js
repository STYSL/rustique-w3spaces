// In counter.js
window.addEventListener('load', function() {
    document.getElementById('numberInput').onchange = function() {
        currentNumber = parseInt(this.value);}
});

function plus1(){
    currentNumber += 1;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus2(){
    currentNumber += 2;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus3(){
    currentNumber += 3;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus4(){
    currentNumber += 4;
    document.getElementById('numberInput').value = currentNumber;
    return currentNumber;
}

function plus5(){
    currentNumber += 5;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus6(){
    currentNumber += 6;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus7(){
    currentNumber += 7;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus8(){
    currentNumber += 8;
    return document.getElementById('numberInput').value = currentNumber;
}

function plus9(){
    currentNumber += 9;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus1(){
    currentNumber -= 1;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus2(){
    currentNumber -= 2;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus3(){
    currentNumber -= 3;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus4(){
    currentNumber -= 4;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus5(){
    currentNumber -= 5;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus6(){
    currentNumber -= 6;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus7(){
    currentNumber -= 7;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus8(){
    currentNumber -= 8;
    return document.getElementById('numberInput').value = currentNumber;
}

function minus9(){
    currentNumber -= 9;
    return document.getElementById('numberInput').value = currentNumber;
}

function reset1(){
    currentNumber = "";
    return document.getElementById('numberInput').value = currentNumber;
}