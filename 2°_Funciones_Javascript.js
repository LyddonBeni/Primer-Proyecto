var p=document.getElementById("Plano");
var lienzo=p.getContext("2d");
console.log (lienzo);

//Usando la función dibujar linea
dibujarLinea("red", 10, 10, 250, 10);
dibujarLinea("red", 250, 10, 250, 250);
dibujarLinea("red", 250, 250, 10, 250);
dibujarLinea("red", 10, 250, 10, 10);
dibujarLinea("blue", 10, 10, 250, 250);
dibujarLinea("blue", 10, 250, 250, 10);
dibujarLinea("blue", 10, 10, 250, 250);
dibujarLinea("blue", 130, 60, 130, 200);
dibujarLinea("blue", 60, 130, 200, 130);
dibujarLinea("red", 60, 130, 130, 60);
dibujarLinea("red", 60, 130, 130, 200);
dibujarLinea("red", 130, 60, 200, 130);
dibujarLinea("red", 200, 130, 130, 200);
dibujarLinea("green", 60, 130, 10, 10);
dibujarLinea("green", 10, 10, 130, 60);
dibujarLinea("green", 10, 250, 130, 200);
dibujarLinea("green", 10, 250, 60, 130);
dibujarLinea("green", 250, 250, 130, 200);
dibujarLinea("green", 250, 250, 200, 130);
dibujarLinea("green", 250, 10, 130, 60);
dibujarLinea("green", 250, 10, 200, 130);

function dibujarLinea(color,x_i,y_i,x_f,y_f)
//las funciones pueden colocarse en cualuqier parte.
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x_i,y_i);
  lienzo.lineTo(x_f,y_f);
  lienzo.stroke();
  lienzo.closePath();
}
