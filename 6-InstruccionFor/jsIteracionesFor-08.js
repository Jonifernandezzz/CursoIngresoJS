//al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
function mostrar()
{

	let contadordivisores;
	let numero;
	

	contadordivisores = 0;
	
	numero = parseInt(numero);
	numero = prompt("Ingrese un numero: ")
	while(isNaN(numero))
	{
		numero = prompt("Error, ingrese un numero");
	}

	for(let i=2; i  < numero; i++)
	{
      if(numero%i == 0)
	  {
		contadordivisores = contadordivisores + 1;
        console.log(numero)
	  }

    }

	if (contadordivisores == 2)
	{
		console.log(numero + " es primo ");
	}else
	{
		console.log(numero + " no es primo ");
	}
	

}//FIN DE LA FUNCIÓN