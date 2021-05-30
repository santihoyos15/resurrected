var village = document.getElementById("village");
village.width = 400;
village.height = 400; 
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

var x = village.width / 2;
var y = village.width / 2 - 80;
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
        if(x > village.width - 80){
            x = x - 10
        }
    }
    
    if(y < 0){
        y = y + 10
    }
    else{
        if(y > village.width - 80){
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
    drawingPlace.drawImage(chicken, village.width / 2 - 80, village.width / 2);
}

function drawCow(){
    drawingPlace.drawImage(cow, village.width - 90, village.width - 80);
}

function drawWolf(){
    drawingPlace.drawImage(wolf, village.width - 90, village.width - 130);
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