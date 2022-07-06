input.onButtonPressed(Button.A, function () {
    logging = true
})
input.onButtonPressed(Button.B, function () {
    logging = false
})
let logging = false
logging = false
loops.everyInterval(500, function () {
    if (logging) {
        datalogger.mirrorToSerial(true)
        datalogger.log(datalogger.createCV("s", input.acceleration(Dimension.Strength)))
    }
})
