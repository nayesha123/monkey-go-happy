var bananaImage,obstaclesImage,obstaclesGroup,Background,score;

var score = 0;

function preload(){
  backImage=loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png");
    player_running = 
      loadAnimation("Monkey_01.png","Monkey_02.png",       "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png",
"Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  

}
function setup() {
  createCanvas(400, 400);
   
  Background = createSprite(200,200,400,400);
  Background.addImage("ground",backImage);
  Background.velocityX = -5;
  ground = createSprite(200,380,400,10);
  
  monkey = createSprite(200,350,50,50);
  monkey.addAnimation("running", player_running);
  monkey.scale = 0.1;
        
   bananaGroup = new Group();
 obstaclesGroup = new Group();
score=0;
}

function draw() {
  background(220);

 ground.visible = false;
  if (Background.x < 0){
      Background.x = Background.width/2;
    }
  if(keyDown("space")){
    monkey.velocityY = -17; 
  }
  obstacle();
  food();
  if(bananaGroup.isTouching(monkey)){
    score = score+2;
    bananaGroup.destroyEach();
  }
    if(obstaclesGroup.isTouching(monkey)){
monkey.scale = 0.05;
  }
  monkey.velocityY = monkey.velocityY +1;
  ground.x=ground.width/2;
  monkey.collide(ground);
  
  switch(score){
      case 10:monkey.scale=0.15;
      break;
      case 20:monkey.scale=0.20;
      break;
      case 30:monkey.scale=0.25;
      break;
      case 40:monkey.scale=0.30;
      break;
      default:break;
  }
 
  drawSprites();
  fill("red");
  textSize(24);
  text("Score: "+ score, 300,25);
}
function food(){
 if(frameCount % 80 === 0){
 var banana = createSprite(400,150,15,30);
  banana.y = random(120,200);
  banana.addImage(bananaImage);
  banana.scale = 0.09;
  banana.velocityX = -5;
  banana.lifetime = 200;
  bananaGroup.add(banana);
}  
}

function obstacle(){
  if(World.frameCount % 300 === 0){
 var obstacles = createSprite(400,350,15,30);
  obstacles.addImage(obstacle_img);
  obstacles.scale = 0.1;
 obstacles.velocityX = -5;
  obstacles.lifetime = 200;
 obstaclesGroup.add(obstacles);
}
}
