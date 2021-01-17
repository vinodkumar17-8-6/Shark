var shark,sharkImage;
var food,foodImage;
var diver, diverImage;
var knife, knifeImage;
var backgroundImage;
var background1Image;
var IVdiver;
var foodsGroup;

function preload(){

    sharkImage = loadImage("shark.gif");
    diverImage = loadImage("diver.gif");
    foodImage = loadImage("food.gif");
    knifeImage = loadImage("knife.png");
    backgroundImage = loadImage("sea.jpg");
  
}

function setup(){

    createCanvas(1500,500);
    
    background = createSprite(750,250);
    background.addImage(backgroundImage);
    background.scale = 1.5;
    background.velocityX = 4;
    
    background1 = createSprite(750,250);
    background1.addImage(backgroundImage);
    background1.scale = 1.5;
    background1.velocityX = 4;
    
    shark = createSprite(900,250,10,10);
    shark.addImage(sharkImage);

    diver = createSprite(1200,200,10,10);
    diver.addImage(diverImage);
    diver.scale = 0.7;

    IVdiver = createSprite(1255,215,50,25);
    IVdiver.visible = false;

    knife = createSprite(1195,225,10,10);
    knife.addImage(knifeImage);
    knife.scale = 0.1;

    foodsGroup = new Group();

}
 
function draw(){

    background.velocityX = 5;
    background1.velocityX = 5;

    if (background.x >= 800){
       background.x = background.width / 3;
       background1.addImage(backgroundImage);
     }

     if (keyDown(UP_ARROW)){
         shark.velocityY = -2;
        }
     if (keyDown(DOWN_ARROW)){
         shark.velocityY = 2;
     }
     if (keyDown(RIGHT_ARROW)){
         shark.velocityX = 4;
     }
     if (keyDown(LEFT_ARROW)){
         shark.velocityX = -2;
     }

     if (shark.isTouching(IVdiver)){
         diver.destroy();
         knife.destroy();
     }
    drawSprites();

    food();

}

function food(){

    if (frameCount % 120===0){
    
    var food = createSprite(0,0,10,10);
    food.y = Math.round(random(50,400));
    food.addImage(foodImage);
    food.velocityX = 5;
    food.scale = 0.3;
    food.lifeTime = 70;
    
    foodsGroup.add(food);

    }

}

function diver(){

}

function knife (){

}
