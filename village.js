var village = document.getElementById("village");
var drawingPlace = village.getContext("2d");

var buttons = document.getElementsByTagName("button");
var playGame = buttons[0];
var stopGame = buttons[1];

var keyCodes = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40
}

// Disable scrolling
playGame.addEventListener("click", disableScrolling);
stopGame.addEventListener("click", enableScrolling);
// Village pic
var villagePic = new Image();
villagePic.src = "images/village/tile.png";
villagePic.addEventListener("load", drawTile);
// // Cow pic
var cow = new Image();
cow.src = "images/village/cow.png";
villagePic.addEventListener("load", drawCow);
// // Chicken
var chicken = new Image();
chicken.src = "images/village/chicken.png";
villagePic.addEventListener("load", drawChicken);
// // Pig 
var pig = new Image();
pig.src = "images/village/pig.png";
villagePic.addEventListener("load", drawPig);
// //Wolf
var wolf = new Image();
wolf.src = "images/village/wolf.png";
villagePic.addEventListener("load", drawWolf);


var x = 250;
var y = 250;
document.addEventListener("keydown" , drawPig);

function drawPig(evento){
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
    

    //The animal can't leave the square
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

    console.log(evento)
    drawTile();
    drawingPlace.drawImage(pig, x,y);
    drawChicken();
    drawCow();
    drawWolf();
}

function drawTile(){
    drawingPlace.drawImage(villagePic , 0, 0);
}

function drawChicken(){
    drawingPlace.drawImage(chicken, 150, 200);
}

function drawCow(){
    drawingPlace.drawImage(cow, 150, 150);
}

function drawWolf(){
    drawingPlace.drawImage(wolf, 400, 300);
}

function aleatory(min, max){ //Max Min Random number generator
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

function disableScrolling(){
    let x=window.scrollX;
    let y=window.scrollY;
    window.onscroll = () => { window.scrollTo(x, y); };
    alert("Move the arrows!");
}

function enableScrolling(){
    window.onscroll = () => { };
    alert("Don't worry, you can scroll again");
}