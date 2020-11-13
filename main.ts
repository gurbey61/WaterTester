input.onButtonPressed(Button.A, function () {
    basic.showNumber(waterQuality)
})
let waterQuality = 0
basic.showString("WQ")
basic.forever(function () {
    waterQuality = pins.analogReadPin(AnalogPin.P0)
    // The higher the number, the higher the conductivity, thus more particles present in the water
    if (waterQuality >= 500) {
        basic.showString("TAP")
    } else if (waterQuality < 500 && waterQuality >= 200) {
        basic.showString("OZRK")
    } else {
        basic.showString("AQFN")
    }
})
