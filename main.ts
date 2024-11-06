input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature() * (9 / 5) + 32)
})
