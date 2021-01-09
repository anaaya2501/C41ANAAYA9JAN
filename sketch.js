var ball;
var database;
var position;
var gameState=0;
var playerCount;
var allPlayers;
var distance;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;
var c1,c2,c3,c4,ti,gi;

function preload(){
  
  c1 = loadImage("images/car1.png");
  c2 = loadImage("images/car2.png");
  c3 = loadImage("images/car3.png");
  c4 = loadImage("images/car4.png");
  ti  = loadImage("images/track.jpg");
  //gi = loadImage("images/ground.png");

  

}
function setup(){
    //captures
    createCanvas(displayWidth,displayHeight);

    //creating databas
database = firebase.database();


game = new Game();
game.getState();
game.start();


    
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
      }
      if(gameState === 1){
        clear();
        game.play();
      }
  if (gameState===2){
    game.end();
 }
    
    //drawSprites();
}



 