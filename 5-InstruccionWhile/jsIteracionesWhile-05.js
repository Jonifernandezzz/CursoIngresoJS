/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let respuesta;
	sexoIngresado = prompt("ingrese f ó m .");
	

	

	

	while(respuesta == f || respuesta == m )

	{
     if(respuesta==f)
	 { 
		mensaje = "Usted es de sexo femenino";

	 }
	 else(respuesta==m)
	 {
	    mensaje = "Usted es de sexo masculino";
	 }
	 
	}
	document.getElementById("txtIdNumero").value = sexoIngresado;


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN