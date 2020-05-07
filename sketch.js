var ball,img,paddle;

function preload() {
  
  ballImage = loadImage('ball.png');
  
  paddleImage=loadImage("paddle.png")

}




function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(10,10,10,10);
  
  ball.addImage (ballImage); 
  
  ball.velocityX=0;  
  
  
  
  
  paddle=createSprite(370,10,10,10);
  
  paddle.addImage(paddleImage);

  
  explosion();
  

}





function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[1]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
 paddle.collide(edges[2]);
  
  

  paddle.y = mouseY;
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
  ball.velocityX=random(-8,8);
}


