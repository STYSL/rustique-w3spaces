window.addEventListener('load', function() {
    document.getElementById('floatInput').onchange = function() {
        startingNumber = parseFloat(this.value).toFixed(2);
    }
    document.getElementById('percentInput').onchange = function() {
        percentageNumber = parseFloat(this.value).toFixed(2);
    }
});

// Select the input elements
var floatInput = document.getElementById('floatInput');
var percentInput = document.getElementById('percentInput');

// Add an input event listener to each input element
[floatInput, percentInput].forEach(input => {
    input.addEventListener('blur', function() {
        // Format the input value to have at most two decimal places
        this.value = parseFloat(this.value).toFixed(2);
    });
});

function percentDecrease(){
    result = Math.round((1 - (percentageNumber / 100)) * startingNumber * 100) / 100;
    return document.getElementById('result').innerHTML = result.toFixed(2);
}

function percentIncrease(){
    result = Math.round((1 + (percentageNumber / 100)) * startingNumber * 100) / 100;
    return document.getElementById('result').innerHTML = result.toFixed(2);
}

function reset2(){
    var result = "";
    document.getElementById('result').innerHTML = result;
    document.getElementById('floatInput').value = result;
    document.getElementById('percentInput').value = result;
    return result;
}