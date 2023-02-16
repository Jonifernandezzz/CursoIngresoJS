//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
    let i;
	let promedio;

	
	contador=0;
	acumulador=0;
	 
	for(let i = 0;  i < 5;   i++)
	{
        numeroIngresado = prompt("ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	    while(isNaN(numeroIngresado))
		{
         
			numeroIngresado = prompt("Error, ingrese otro numero!!");
		    numeroIngresado = parseInt(numeroIngresado);

		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		promedio = acumulador / contador;

		document.getElementById("txtIdSuma").value = acumulador;
        
		document.getElementById("txtIdPromedio").value = promedio;	   
	
	
	
	}

	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN