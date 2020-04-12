var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
var texto = document.getElementById("numero_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "rgb(43, 120, 191)";
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    //esta linea de codigo verifica el numere de vesces dubujada la linea
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
}
