var boy, boy_running
var bg, bgImg
var obstacle, obs1, obs2, obs3, obs4, obs5, obs6
var invisGround
var gameState = "play"
var score = 0

function preload(){
    boy_running = loadAnimation("Boy1.png","Boy2.png","Boy3.png","Boy4.png","Boy5.png","Boy6.png");
    bgImg = loadImage("bg4.png");
    obs1 = loadImage("Longspike.png")
    obs2 = loadImage("Rock.png")
    obs3 = loadImage("Turtleshell.png")
    obs4 = loadImage("Shortspike.png")
}

function setup(){
createCanvas(800,400)
bg = createSprite(0,0,800,400)
bg.addImage(bgImg)
bg.scale = 1.5
bg.velocityX = -3
boy = createSprite(50,350,50,50)
boy.addAnimation("running",boy_running)
invisGround = createSprite(400,400,800,10)
invisGround.visible = true
}

function draw(){
background(0)
drawSprites()
//console.log(boy.y)
if(gameState === "play"){
    textSize(20)
    stroke("red")
    fill("red")
    text("Score is "+score,500,50)
    if(bg.x<100){
    bg.x = 500
    }
    if(keyDown("space")&&boy.y>=356){
        boy.velocityY = -12
    }
    boy.velocityY = boy.velocityY+0.8
    boy.collide(invisGround)
    spawnObstacles()
}
}
function spawnObstacles(){
    if(frameCount%100===0){
        obstacle = createSprite(800,380,30,50)
        obstacle.velocityX = -3
        var rand = Math.round(random(1,4))
        switch(rand){
            case 1 : obstacle.addImage(obs1)
            obstacle.scale = 0.5
            break
            
            case 2 : obstacle.addImage(obs2)
            obstacle.scale = 0.3
            break

            case 3 : obstacle.addImage(obs3)
            obstacle.scale = 0.3
            break

            case 4 : obstacle.addImage(obs4)
            obstacle.scale = 0.5
            break
            default : break
        }
    }
    
    
    
}