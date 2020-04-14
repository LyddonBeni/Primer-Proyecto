areaDeDibujo.addEventListener("mousedown", dibujarMouse);
areaDeDibujo.addEventListener("mouseup", dibujarMouse);
areaDeDibujo.addEventListener("mousemove", dibujarMouse);

var cuadrito = document.getElementById("areaDeDibujo");
var papel = cuadrito.getContext("2d");
var x = cuadrito;
var y = cuadrito;


function dibujarMouse(evento)
{
  var colorcito = "blue";
  console.log(evento);

    dibujarLinea(colorcito, x, y, evento.offsetX, evento.offsetY, papel);
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.fillStyle = "red";
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
