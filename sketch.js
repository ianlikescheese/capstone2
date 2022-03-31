var player;
var obstacleGroup, redSpike, greenApple;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var score

function setup() {
    createCanvas(200, 200);
    player = createSprite(20, 170, 20, 20)

}

function spawnStuff() {
    
        if (frameCount % 60 === 0) {
            var stuff = createSprite(200, Math.round(random(1, 200)), 20, 20)

            var rand = Math.round(random(1, 2))
            stuff.velocityX = 4
            switch (rand) {
                case 1:
                    stuff.fill(20)
                    break;
                case 2:
                    stuff.fill(10)
                    break;
                default:
                    break;
            }
            obstacle.lifetime = 300;

            obstaclesGroup.add(obstacle);
        }
    
    
    
}

function draw() {
    background(0)

    
    if (gameState == PLAY) {
        spawnStuff()
        player.y = World.mouseY

    }
    else if (gamestate == END){
        stuff.velocityX = 0
    }
    if (redSpike.isTouching(player)){
        gameState == END
    }
    if (greenApple.x < 0){
        gamestate == END
    }
    drawSprites()
}