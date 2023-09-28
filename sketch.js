//variaveis
let xbola = 300;
let ybola = 200;
let diametro = 10;
let velocidadex = 4;
let velocidadey = 2;
let raio = diametro /2;
let raquetex = 0;
let raquetey =  150;
let raquetecomprida = 10;
let raquetealta = 100;
let raqueteinimigay = 150;
let raqueteinimigax = 590;
let altura = 100;
let comprimento = 10;
let pontuaçao = 0;
let pontuaçaoinimiga = 0;
//variaveis
function setup() {
  createCanvas( 600,400)
}

function draw() {
  background(25,25,112);
  maria()
  jose()
  batidas()
  minhaMãe()
  namovimentaçao()
  batidaraquete()
  kawan()
  uva()
  placar()
  pontos()
  linha()
  especiais()
  velocidademaxima()
  
  
} 

function maria(){
  noStroke()
  fill(color(255,165,0))
  circle(xbola,ybola,diametro);
}




function jose(){
  xbola += velocidadex;
  ybola += velocidadey;
}




function batidas(){
 if (xbola + raio > width || xbola - raio < 0 ){
   velocidadex *= -1;}
  if (ybola + raio > height || ybola - raio < 0){
    velocidadey *= -1;
     }}
function minhaMãe(){
  noStroke();
  fill(color(0,255,0));
  rect(raquetex,raquetey,raquetecomprida,raquetealta);
}




function namovimentaçao(){
  if(keyIsDown(87))
    raquetey +=  -15;
  if(keyIsDown(83))
    raquetey += 15;
}
function batidaraquete(){
  if(xbola-raio < raquetex + raquetecomprida && ybola - raio > raquetey  && ybola - raio < raquetey + raquetealta)
    velocidadex*= -1;
}
function kawan(){
 noStroke()
  fill( color(255,0,0))
 rect(raqueteinimigax,raqueteinimigay,10,100)
  
}
 function uva(){
  if(keyIsDown(UP_ARROW))
    raqueteinimigay += -15
   if(keyIsDown(DOWN_ARROW))
     raqueteinimigay += 15
   if(xbola > raqueteinimigax - comprimento && ybola > raqueteinimigay && ybola < raqueteinimigay + altura)
  velocidadex *= -1;
 }
function placar(){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(0,0,255))
  rect(230,20,40,30,5 );
  fill(255);
  text(pontuaçao,250,40);
 fill(color(255,0,0))
   rect(330,20,40,30,5);
  fill(255);
  text(pontuaçaoinimiga,350,40);
  
}
function pontos(){
 if(xbola > 595){
   pontuaçao += 1
 } 
  if(xbola < 5 ){
  pontuaçaoinimiga += 1
  }
  
}
function linha(){
  noStroke()
  fill(color(127))
  rect(0,395,600,5)
    noStroke()
  fill(color(0,0,0))
  rect(298,0,4,400)
  
}

function especiais(){
  if(pontuaçao > 0|| pontuaçaoinimiga > 0)
  velocidadex *= 1.00005
  velocidadey *= 1.00005
}


function velocidademaxima()
{
  if(velocidadex > 15){
    velocidadex = 15;
  }
  if(velocidadex < -15){
    velocidadex = -15;
  }
  if(velocidadey > 15){
    velocidadey = 15;
  }
  if(velocidadey < -15){
    velocidadey = -15;
  }
}