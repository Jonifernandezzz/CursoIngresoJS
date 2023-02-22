//al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
function mostrar()
{
	let numero;
	let contadorpares;
	

	contadorpares = 0;
	//pido numero
	numero = parseInt(numero);
	numero = prompt("Ingrese un numero: ")
	//hacer una variable q tome los valores desde el 1 hasta el numero ingresado;
	for(let i = 1; i < numero; i++){


	
	//para cada uno de los valores q toma la variable analizo la paridad
	// cuando escuentro un par lo cuento y lo muestro
	if (i % 2 == 0){
       contadorpares = contadorpares + 1;
	   console.log(i);
	
	}
 }

// una vez q analize la cantidad de valores muestro el numero de pares
console.log(" pares encontrados " + contadorpares);



}//FIN DE LA FUNCIÓN