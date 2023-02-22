/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
function mostrar()
{
	let sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("ingrese f ó m segun cual sea su genero.");
	
	while(!isNaN(sexoIngresado) && sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "M" && sexoIngresado != "m" )

	{
     sexoIngresado = prompt("Error, ingrese f para femenino o m para masculino");
	 
	}

	if(sexoIngresado == "f" || sexoIngresado == "F")
	 { 
		sexoIngresado = " Femenino ";

	 }
	 else
	 {
	    sexoIngresado = " Masculino ";
	 }
	mensaje = "Su sexo es " + sexoIngresado;
	document.getElementById("txtIdSexo").value = mensaje;
	  }




  

