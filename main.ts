let lol = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        lol += 1
        basic.pause(1000)
    }
})
basic.forever(function () {
    basic.showNumber(lol)
})
