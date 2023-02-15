/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let mensaje;

	claveIngresada = prompt("ingrese el número clave.");

	while(clave != utn750){
		claveIngresada = prompt("Error, ingrese la clave correcta");
	}
	
     mensaje = "Felicidades, ingreso bien la clave";
	 alert(mensaje); 
	
}//FIN DE LA FUNCIÓN
