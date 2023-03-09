function nuevoenemigo () {
    enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        enemigo.change(LedSpriteProperty.Y, 1)
    }
}
input.onButtonPressed(Button.A, function () {
    cuadradito.move(-1)
})
input.onButtonPressed(Button.B, function () {
    cuadradito.move(1)
})
let enemigo: game.LedSprite = null
let cuadradito: game.LedSprite = null
game.setScore(0)
cuadradito = game.createSprite(2, 4)
nuevoenemigo()
basic.forever(function () {
    if (enemigo.isTouching(cuadradito)) {
        basic.showIcon(IconNames.Skull)
        game.gameOver()
    }
    if (enemigo.isTouchingEdge()) {
        game.addScore(1)
        enemigo.delete()
        nuevoenemigo()
    }
})
