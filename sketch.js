var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

//	fairyVoice.play();

	fairy = createSprite(300, 520,0,0);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30,0,0);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
	Engine.run(engine);

	star.x=starBody.position.x;

}


function draw() {
  background(bgImg);

  if(star.x-fairy.x < (star.width+fairy.width)/2)
	{
	  star.velocityY=0;
	}

  if(keyDown("down_arrow"))
	{
		star.velocityY=2;
	}

	if(keyDown("right_arrow"))
	{
		fairy.x=fairy.x+2;
	}

	if(keyDown("left_arrow"))
	{
		fairy.x=fairy.x-2;
	}



  drawSprites();

}
