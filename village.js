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
var villagePic = createObject("images/village/tile.png", drawTile);
// // Cow pic
var cow = createObject("images/village/cow.png", drawCow);
// // Chicken
var chicken = createObject("images/village/chicken.png", drawChicken);
// // Pig 
var pig = createObject("images/village/pig.png", drawPig);
// //Wolf
var wolf = createObject("images/village/wolf.png", drawWolf);

var x = 250;
var y = 250;
document.addEventListener("keydown" , drawPig);

function createObject(image, drawFunction){
    var animal = new Image();
    animal.src = image;
    animal.addEventListener("load", drawFunction);
    return animal;
}

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
    window.onscroll = () => {};
    alert("Don't worry, you can scroll again");
}