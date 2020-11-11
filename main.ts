basic.forever(function on_forever() {
    let i: number;
    let x0: number;
    let y0: number;
    let x1: number;
    let y1: number;
    let x2: number;
    let y2: number;
    let x3: number;
    let y3: number;
    let x4: number;
    let y4: number;
    for (i = 0; i < 4; i++) {
        x0 = 2
        y0 = 2
        led.plot(x0, y0)
    }
    for (let j = 0; j < i; j++) {
        x1 = x0
        y1 = y0 - j
        x2 = x0 - j
        y2 = y0
        x3 = x0
        y3 = y0 + j
        x4 = x0 + j
        y4 = y0
        led.plot(x1, y1)
        led.plot(x2, y2)
        led.plot(x3, y3)
        led.plot(x4, y4)
        basic.pause(500)
    }
})
