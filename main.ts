input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("langsamer")
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendString("zurück")
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendString("schneller")
})
basic.showLeds(`
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    . . . . .
    `)
radio.setGroup(49)
basic.forever(function () {
	
})
