music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.InBackground)
for (let index = 0; index < 10; index++) {
    basic.showLeds(`
        . . . # .
        . . # # #
        . . . # .
        . . . # .
        . . # # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # #
        # . # . .
        . # . . .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        # # . . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # .
        . . # . #
        . . . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . .
        . # # # #
        . . # . .
        . # . # .
        . # . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        # . # . .
        # # # . .
        . . # . .
        . . # # .
        . . # . #
        `)
    basic.showLeds(`
        . . # . #
        # # # # .
        . . # . .
        . # . # .
        # . . # .
        `)
}
