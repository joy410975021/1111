def on_forever():
    for i in range(4):
        x0=2;
        y0=2;
        led.plot((x0),(y0))      
    for j in range(i):
        x1 = x0;
        y1 = y0 - j
        x2 = x0 - j
        y2 = y0;
        x3 = x0;
        y3 = y0 + j
        x4 = x0 + j
        y4 = y0;
        led.plot((x1),(y1))
        led.plot((x2),(y2))
        led.plot((x3),(y3)) 
        led.plot((x4),(y4))
        basic.pause(500)
basic.forever(on_forever)