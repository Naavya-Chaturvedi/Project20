var bg,bgImg;
var cat,catMoving,catImg,catHappy;
var mouse,mouseImg,mouseMoving,mouseHappy;

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg = loadAnimation("cat1.png");
    catMoving = loadAnimation("cat2.png","cat3.png");
    catHappy = loadAnimation("cat4.png");
    mouseImg = loadAnimation("mouse4.png");
    mouseMoving = loadAnimation("mouse2.png","mouse3.png");
    mouseHappy = loadAnimation("mouse1.png")
}

function setup(){
    createCanvas(500,400);
    //create tom and jerry sprites here
      bg = createSprite(250,200,500,400);
      bg.addImage("b",bgImg);

      cat = createSprite(300,400,20,20);
      cat.addImage("c",catImg);

      mouse = createSprite(100,400,10,10);
      mouse.addImage("m",mouseImg);
    }

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
     if(cat.x-mouse.x<(cat.width-mouse.width)/2){
           mouse.addAnimation("happym",mouseHappy);
           mouse.changeAnimation("happym");

           cat.addAnimation("Happyc",catHappy);
           cat.changeAnimation("Happyc");
     }

     keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW){
       mouse.addAnimation("mouse",mouseMoving);
       mouse.changeAnimation("mouse");
       mouse.frameDelay = 25;
   }

}
