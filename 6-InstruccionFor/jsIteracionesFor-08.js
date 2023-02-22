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
		numero = prompt("Error, ingrese un numero")
	}

	for(let i=2; i  < numero; i++)
	{
      if(numero%i == 0)
	  {
        console.log(numero)
	  }

    }
	

}//FIN DE LA FUNCIÓN