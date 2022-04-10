var bg;
var snow
var img
var snowimg
function preload(){
  img=loadImage("snow2.jpg")
  snowimg=loadImage("snow4.webp")
}

function setup() {
  createCanvas(1200,800);

  bg=createSprite(600, 200, 600, 800);
  bg.addImage("hi" , img)
  
  
  snow=createSprite(400,10,50,50)
  snow.addImage("hello" , snowimg)
  snow.velocityY=2
  snow.scale=0.1
 
  
}

function draw() {
  background(0)
  drawSprites();
}