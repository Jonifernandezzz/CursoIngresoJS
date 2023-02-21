//al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.
function mostrar()
{



//FIN DE LA FUNCIÓNlet numero;
	let contadordivisores;
	let numero;
	

	contadordivisores = 0;
	
	numero = parseInt(numero);
	numero = prompt("Ingrese un numero: ")
	
	for(i = 1; i < numero; i++){


	
	//para cada uno de los valores q toma la variable analizo la paridad
	// cuando escuentro un par lo cuento y lo muestro
	if (numero % i == 0){
       contadordivisores = contadordivisores + 1;
	   console.log(i);
	
	}
 }

// una vez q analize la cantidad de valores muestro el numero de pares
console.log(" divisores encontrados " + contadordivisores);
  }