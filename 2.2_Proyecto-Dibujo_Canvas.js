var p=document.getElementById("Plano");
var lienzo=p.getContext("2d");
console.log (lienzo);

lienzo.beginPath();
// asigna el color con strokeStyle
lienzo.strokeStyle = "blue";
// con moveTo nos movemos a una pocision especifica
lienzo.moveTo(0,0);
// creamos una linea con lineTo
lienzo.lineTo(500,500);
// dibujamos la linea con stroke
lienzo.stroke();
// con closePath cerramos el trazo
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(10, 100);
lienzo.lineTo(200, 10);
lienzo.stroke();
lienzo.closePath();
