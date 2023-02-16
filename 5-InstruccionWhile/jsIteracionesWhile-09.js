/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
> y < */
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero= true;
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	    while(isNaN(numeroIngresado))
		{
         
			numeroIngresado = prompt("Error, ingrese otro numero!!");
		    numeroIngresado = parseInt(numeroIngresado);

		}
		if(banderaDelPrimero == true)
		{
          numeroMaximo = numeroIngresado;
		  numeroMinimo = numeroIngresado;
          banderaDelPrimero = false;

		}
		else if (numeroMaximo < numeroIngresado)
		{
			numeroMaximo = numeroIngresado;
		}
		else if (numeroMinimo > numeroIngresado)
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta=prompt("desea continuar? si/no " );
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo
}//FIN DE LA FUNCIÓN