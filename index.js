var imagen = document.getElementById("macy");
imagen.addEventListener("click" , xd);

function xd(oe){
    console.log(oe);
    console.log(oe.offsetX , oe.offsetY);
}