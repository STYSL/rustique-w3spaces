let countdown;

function startTimer() {
    let hrs = parseInt(document.getElementById('hrsInput').value);
    let mins = parseInt(document.getElementById('minsInput').value);
    let secs = parseInt(document.getElementById('secsInput').value);

    let totalSeconds = (hrs * 3600) + (mins * 60) + secs;

    countdown = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            document.getElementById('timesUp').innerHTML = "Time's up!";
            return;
        }
        
        totalSeconds--;
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        // Update the input fields in real time
        document.getElementById('hrsInput').value = hours;
        document.getElementById('minsInput').value = minutes;
        document.getElementById('secsInput').value = seconds;


    }, 1000);
}

function pause() {
    clearInterval(countdown);
}

function resume() {
    startTimer();
}

function resetTimer() {
    clearInterval(countdown);
    document.getElementById('timesUp').innerHTML = '';
    document.getElementById('hrsInput').value = '0';
    document.getElementById('minsInput').value = '0';
    document.getElementById('secsInput').value = '0';
}