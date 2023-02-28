// al ingresar una edad q sea 15, mostrar el mensaje "niña bonita"
/*
function mostrar()
{
	

	
 let edad;
 
 edad = document.getElementById("txtIdEdad").value;
 edad = parseInt(edad);

  if(edad==15)
  {
     alert(" niña bonita ");

 }else{
    alert(" usted no ingreso 15 ")
	
  }

} /*FIN DE LA FUNCIÓN
if(condicion)//verdadero o falso (0) true -> verdadero false -> falso
	{
		codigo...;
	}else
	{
		codigo...;		
	}

	operadores aritmeticos:
	+ - * / %
	operadores relacionales o condicionales
	< > <= >= == !=
	operadores logicos
    condicionUno	&&  condicionDos            ||               !
	y logica                                o logica         negacion
	*/




/* Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.
*/

function mostrar()
{  
// crear variables
// inicializar variables
// pido los datos
// valiar
// proceso
// informar 
let ingNombre;
let ingNacionalidad;
let ingPosicion;
let ingGoles;
let goleadorTorneo;
let contadorJugIngleses;
let porcentajeJugIngleses;
let contadorJugadores;
let respuesta;
let banderaGoles;
let maximoGoles;
let nombreGoleador;
let banderaTarjetas;
let minimoTarjetas;
let argentinoMenosTarjetas;
let nombreArgentino;
let ingTarjetasRojas;

banderaGoles = true;
banderaTarjetas = true;
argentinoMenosTarjetas = 0;
ingGoles = 0;
contadorJugIngleses = 0;
contadorJugadores = 0;
cantTarjetas = 0;

while(respuesta == "si")
{
	ingNombre = prompt("ingrese su nombre");
	ingNacionalidad = prompt("Ingrese su nacionalidad (chino, argentino, ingles)");
	while(ingNacionalidad != "chino" && ingNacionalidad != "argentino" && ingNacionalidad != "ingles")
	{  
		ingNacionalidad = prompt("Ingrese una nacionalidad valida"); 
	}	
	ingPosicion = prompt("ingrese su posicion (arquero, defensero, mediocampista o delantero)");
	{ 
	while(ingPosicion != "arquero" && ingPosicion != "defensor" && ingPosicion != "mediocampista" && ingPosicion != "delantero")
		ingPosicion = prompt("Ingrese una nacionalidad valida");
    }
	ingTarjetasRojas = prompt("ingrese la cantidad de tarjetas rojas");
	ingTarjetasRojas = parseInt(ingTarjetasRojas);
	while(isNaN(ingTarjetasRojas))
	{
		ingTarjetasRojas = prompt("Error, infrese la cantidad de tarjetas rojas");
	}
	ingGoles = prompt("ingrese la cantidad de goles");
	ingGoles = parseInt(ingGoles);
	while(isNaN(ingGoles))
	{
		ingGoles = prompt("Error, infrese la cantidad de goles");
	}

}
if(banderaGoles==true)
{
	nombreGoleador = ingNombre;
   maximoGoles = ingGoles;
   banderaGoles = false; 
}

switch(ingNacionalidad)
{
	case "argentino":
		if(banderaTarjetas == true){
			minimoTarjetas = ingTarjetasRojas;
			banderaTarjetas = false;
		}


}



}
