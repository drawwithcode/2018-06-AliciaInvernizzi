var myData;
var myBg;
var pkball;
var value = 0;

function preload() {
myData = loadJSON('assets/pokedex.json');
myBg = loadImage('./assets/grassbg.jpg');
pkball = loadImage('./assets/pokeball.png');
}

var pkmn = [];
var info = [];

function setup() {

createCanvas(windowWidth,windowHeight);
image(myBg, 0, 0, windowWidth, windowHeight);

//pokeball with name
for (var i = 0; i < myData.pokemon.length/10; i++) {

  var pokedex = myData.pokemon[i];

  var x = random(100, windowWidth-100);
  var y = random(120, windowHeight-150);
  var name = myData.pokemon[i].name;1
  push();
  imageMode(CENTER);
  var img = image (pkball, x, y+35, pkball.width/9, pkball.height/9);
  pop();

  var myPkm = new Pokemon(x, y, name, img);
  pkmn.push(myPkm);

  //text info with num and type
  var x = x;
  var y = y;
  var h = myData.pokemon[i].height;
  var w = myData.pokemon[i].weight;
  var type = myData.pokemon[i].type;

  var myInfo = new Info(x, y, h, w, type);
  info.push(myInfo);
}

push();
textAlign(CENTER);
textFont('Carter One');
textSize(30);
fill(215,0,0);
stroke(0);
strokeWeight(4);
text('Click to find out who is hiding',windowWidth/2,70);
textSize(25);
text('Click again to get more information',windowWidth/2,100);
pop();

}


function draw() {

}


function mouseClicked() {
    if (value === 0) {
      value = 1;
      for(var j = 0; j < pkmn.length; j++) {
        pkmn[j].display();
      }
    } else if (value === 1){
      value = 0;
      for(var s = 0; s < info.length; s++) {
        info[s].display();
      }
    }
}


function Pokemon(_x, _y, _name, _img) {
	this.x = _x;
	this.y = _y;
  this.name = _name;
  this.img = _img;

	this.display = function() {
    textAlign(CENTER);
    textFont('Carter One');
    textSize(20);
    fill(255);
    stroke(0);
    strokeWeight(3);
    text(_name, this.x, this.y);
	}

}

function Info(_x, _y, _h, _w, _type) {
	this.x = _x;
	this.y = _y;
  this.h = _h;
  this.w = _w;
  this.type = _type;

	this.display = function() {
    textAlign(CENTER);
    textFont('Carter One');
    textSize(15);
    fill(255);
    stroke(0);
    strokeWeight(2);
    text(_h, this.x, this.y+80);
    text(_w, this.x, this.y+95);
    text(_type, this.x, this.y+110);
	}
}
