var fullTime = 300
var interval
var button = document.getElementById('button')

button.addEventListener('click', () => {
    if (button.classList.contains('started')) {
        clearInterval(interval)
        button.innerHTML = "Start"
        fullTime = 300;
        writeTime(5, 0)
        button.classList.remove('started')
    } else {
        startInterval()
        button.innerHTML = "Stop"
        button.classList.add('started')
    }
})

function startInterval() {
    interval = setInterval(() => {
        fullTime--
    
        var minutes = fullTime / 60
        var seconds = fullTime % 60

        writeTime(minutes, seconds)

        if(minutes == 0 && seconds == 0) {
            clearInterval(interval)
            fullTime = 300;
            writeTime(5, 0)
            button.innerHTML = "Timer ist zu ende, drücke um den Time wieder zu starten"
            button.classList.remove('started')
        }
    }, 1000)
}

function writeTime(minutes, seconds) {
    if(minutes < 10) {
        minutes = '0' + minutes
    }
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    document.getElementById('minutes').innerHTML = Math.floor(minutes)
    document.getElementById('seconds').innerHTML = seconds
}