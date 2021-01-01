var ball

function setup (){
createCanvas(400, 400)
ball = createSprite(50,50,50,50)
ball.shapeColor = "red"
}

function draw () {
background("black")
drawSprites()
if(keyDown("UP_ARROW")) {
    changeposition(0, -1)
}
else if(keyDown("DOWN_ARROW")) {
    changeposition(0, 1)
}
else if(keyDown("LEFT_ARROW")) {
    changeposition(-1, 0)
}
else if(keyDown("RIGHT_ARROW")) {
    changeposition(1, 0)
}
}

function changeposition(x, y) {
    ball.x = ball.x+x
    ball.y = ball.y+y
}