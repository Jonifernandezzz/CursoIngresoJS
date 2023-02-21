/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
let numero;
let respuesta = "si";
let acumulador = 0;
let contador = 0;

while (respuesta == "si"){
	numero = prompt(" Ingrse un numero ");
	numero = parseInt(numero);
	acumulador = acumulador + numero;
	contador = contador + 1;

  respuesta = prompt( " Quiere ingresar otro numero? si/no ");

}
   numero = parseInt (numero);
   promedio = acumulador / contador;

   document.getElementById("txtIdSuma").value = acumulador;
   document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN