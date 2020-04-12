var d = document.getElementById("plano");
var ancho = d.width;
var lienzo = d.getContext("2d");
var texto = document.getElementById("numero_lineas");
var boton = document.getElementById("boton");
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
  var xi, yf;
  var colorcito = "rgb(43, 120, 191)";
  var espacio = ancho / lineas;

  do {
    xi = espacio * l;
    yf = espacio * (l + 1)
    dibujarLinea(colorcito, xi, 0, 300, yf);
    console.log("Lineas" + l);
    l++;
  } while (l<lineas);
  // lineas del borde inferior y lateral izquierdo
  dibujarLinea(colorcito, 1,1,1,299);
  dibujarLinea(colorcito, 1,299,299,299);
  // lineas del borde superior y laterla derecho
  dibujarLinea(colorcito, 299, 1,1,1);
  dibujarLinea(colorcito, 299,299,299,1);
}
