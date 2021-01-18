for (i = 0; i < 20; i++){
    console.log(aleatory(0, 100));
}

var village = document.getElementById("village");
var drawingPlace = village.getContext("2d");
var elements = document.getElementsByTagName("body");
var bodyObject = elements[0];

var keyCodes = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
}

//Sisable scrolling
village.addEventListener("click", disableScrolling);
bodyObject.addEventListener("click", enableScrolling);

// Village pic
var imagen = new Image();
imagen.src = "../images/village/tile.png";
imagen.addEventListener("load" , drawPig);
// Cow pic
cow = new Image();
cow.src = "../images/village/cow.png";
// Chicken
chicken = new Image();
chicken.src = "../images/village/chicken.png";
// Pig 
pig = new Image();
pig.src = "../images/village/pig.png";
//Wolf
wolf = new Image();
wolf.src = "../images/village/wolf.png";

var x = 250;
var y = 250;
document.addEventListener("keydown" , drawPig);

function draw(evento){
    console.log(evento);
}



function drawPig(evento){
    drawingPlace.drawImage(imagen , 0, 0);
    if(evento.keyCode === keyCodes.LEFT){
        x = x - 10;
    }
    if(evento.keyCode === keyCodes.UP){
        y = y - 10;
    }
    if(evento.keyCode === keyCodes.RIGHT){
        x = x + 10;
    }
    if(evento.keyCode === keyCodes.DOWN){
        y = y + 10;
    }

    console.log(evento)
    drawingPlace.drawImage(pig, x,y);
    drawingPlace.drawImage(cow, 150, 150);
    drawingPlace.drawImage(chicken, 150, 200);
    drawingPlace.drawImage(wolf, 400, 300);

    if(x < 0){
        x = x + 10
    }
    else{
        if(x > 420){
            x = x - 10
        }
    }
    
    if(y < 0){
        y = y + 10
    }
    else{
        if(y > 420){
            y = y - 10
        }
    }
}

function aleatory(min, max){ //Max Min Random number generator
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}