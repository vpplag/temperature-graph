input.onButtonPressed(Button.A, function () {
    button_pressed = 1
})
input.onButtonPressed(Button.AB, function () {
    button_pressed = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    button_pressed = 2
})
let button_pressed = 0
button_pressed = 0
basic.forever(function () {
    if (button_pressed == 1) {
        led.plotBarGraph(
        input.temperature(),
        40
        )
    } else if (button_pressed == 2) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
    }
})
