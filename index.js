// Canvas definition
var d = document.getElementById("eiffel");
var canvas = d.getContext("2d");
var colorStyle = "#0b2f46";
var canvasHeight = d.height;
var canvasWidth = d.width;

setInterval(drawEiffel, 2000);
setInterval(() => {
    canvas.clearRect(2, 2, canvasWidth -4, canvasHeight- 4);
}, 4000);


//Borders
drawLine(colorStyle , 1 , 1, 1, canvasWidth -1);
drawLine(colorStyle , 1 , canvasWidth -1, canvasWidth - 1, canvasWidth - 1);
drawLine(colorStyle , 1 , 1, canvasWidth - 1 , 1);
drawLine(colorStyle , canvasWidth - 1 , 1 , canvasWidth - 1, canvasWidth - 1);

// Functions

function drawEiffel(){
    var aleatoryNumber = aleatory(1,30);
    var lines = parseInt(aleatoryNumber);
    var l = 0;
    var iy, fx;

    for (l = 0; l < lines; l++)
    {
        iy = canvasWidth / lines * l;
        fx = canvasWidth / lines * (l + 1);
        drawLine(colorStyle , 1 , iy, fx, canvasWidth - 1);
    }


}

function drawLine(color, initialX, initalY, finalX, finalY){
    canvas.beginPath();          // Path opening.
    canvas.strokeStyle = color;  // Stroke style definition.
    canvas.moveTo(initialX , initalY);    // Stroke start.
    canvas.lineTo(finalX , finalY);    // Stroke finished.
    canvas.stroke();             // Stroke application.
    canvas.closePath();           // Path closing.
}

function aleatory(min, max){ //Max Min Random number generator
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

