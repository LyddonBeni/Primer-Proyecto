var edadactual = document.getElementById("edad");
var boton = document.getElementById("b_calcular");
boton.addEventListener("click", calcular_edad );

function calcular_edad()
{
  var edadnacimiento=2020-parseInt(edadactual.value)
  // *.value obtiene el valor del texto edad
  var edad2080=(2080-edadnacimiento+1)
  document.write(edad2080)
}
