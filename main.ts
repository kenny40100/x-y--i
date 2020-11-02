for (let i = 4; i >= -4; i--) {
    for (let x = 4; x >= i; x--) {
        led.plot(x, x - i)
    }
    basic.pause(200)
    basic.clearScreen()
}
basic.forever(function () {
	
})
