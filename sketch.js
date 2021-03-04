var police,policeImage;
var thief,thiefImage;
var ground,groundImage,obstacles,obstacleImage;
var obstacle2Image,obstacle3Image;

function preload(){

}

function setup(){
 createCanvas(600,600);
ground=createSprite(300,300);
thief=createSprite(300,500,20,20);
police=createSprite(300,580,20,20);

}

function draw(){
  background("brown");
  
  drawSprites();
}
function spawnObstacles(){
    if(frameCount%60=== 0 ){
     obstacles=createSprite(Math.round(random(20,550)),0,20,20);
    }
}
