// definicion de las variable canvas
var plano=document.getElementById("plano_cartesiano");
var lienzo_2 = plano.getContext("2d");

// definicion del evento
document.addEventListener("keyup",dibujarPorTeclado);

// ubicacion del punto de inicio
var x = 150
var y = 150
var colorcito = "rgb(43, 120, 191)";

// dibujo del contorno
dibujarLinea(colorcito, 1,1,1,299,lienzo_2);
dibujarLinea(colorcito, 1,299,299,299,lienzo_2)
dibujarLinea(colorcito, 299, 1,1,1,lienzo_2);
dibujarLinea(colorcito, 299,299,299,1,lienzo_2);

// funcion de dibujo  de linea
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.linewidth = 2;
  // linewidth nos define el grosor de linea.
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

// Definimosuna variable
var teclas ={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas)

// funcion dibujo por teclado
function dibujarPorTeclado(evento)
{
  var movimiento = 5
  switch (evento.keyCode)
  // Se usa cuando se tiene muchas condicionales if agrupadas
  // Solo sirve para comparar dos valores
  {
    case teclas.UP:
      dibujarLinea(colorcito,x,y,x,y-movimiento,lienzo_2);
      y =  y - movimiento;
      console.log("arriba")
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito,x,y,x,y+movimiento,lienzo_2);
      y =  y + movimiento;
      console.log("abajo")
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito,x,y,x-movimiento,y,lienzo_2);
      x =  x - movimiento;
      console.log("izquierda")
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito,x,y,x+movimiento,y,lienzo_2);
      x =  x + movimiento;
      console.log("derecha")
    break;
    default:
      alert("solo teclas direccionales")
      console.log("otra tecla");
  }
      console.log(evento.keyCode);
  }
