var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
var distance = 0;

var cars,car1,car2,car3,car4;

function setup(){
   
  //canvas = createCanvas(400,400);
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}

function showError(){
  console.log("Error al escribir en la base de datos");
}
